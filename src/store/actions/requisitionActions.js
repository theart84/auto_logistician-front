import {actionRequisition} from "../requisition";
import {serializeRequisition} from "../../utils/serializeRequisitionData";
import {actionsUI} from "../ui";
import {actionRequest} from "../request";

export const fetchRequisitionData = () => {
  return async (dispatch) => {
    dispatch(actionsUI.showPreloader())
    const fetchData = async () => {
      const request = await fetch('http://localhost:5000/api/requisitions');
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      const response = await fetchData();
      const transformedArray = serializeRequisition(response.requisition);
      dispatch(actionRequisition.initialFetch(transformedArray));
      dispatch(actionsUI.hidePreloader());
    } catch (error) {
      console.log(error);
    }
  }
}

export const createRequisition = (requisition) => {
  return async (dispatch) => {
    dispatch(actionsUI.showPreloader())
    const fetchData = async () => {
      const request = await fetch('http://localhost:5000/api/requisition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requisition)
      });
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      const response = await fetchData();
      const transformedArray = serializeRequisition(response.requisition);
      dispatch(actionRequisition.updateRequisitions(transformedArray));
      dispatch(actionsUI.hidePreloader());
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteRequisition = (id) => {
  return async (dispatch) => {
    dispatch(actionsUI.showPreloader())
    const fetchData = async () => {
      const request = await fetch(`http://localhost:5000/api/requisition/${id}`, {
        method: 'DELETE'
      });
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      const response = await fetchData();
      const transformedArray = serializeRequisition(response.requisition);
      dispatch(actionRequisition.updateRequisitions(transformedArray));
      dispatch(actionsUI.hidePreloader());
    } catch (error) {
      console.log(error);
    }
  }
}

export const getRequisitionById = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const request = await fetch(`http://localhost:5000/api/requisition/${id}`);
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      dispatch(actionRequest.pendingRequest());
      const response = await fetchData();
      dispatch(actionRequisition.getCurrentRequisitionById(response.requisition));
      dispatch(actionRequest.fulfilledRequest());
    } catch (error) {
      console.log(error);
      dispatch(actionRequest.rejectRequest());
    }
  }
}

export const editRequisition = (requisition) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const request = await fetch(`http://localhost:5000/api/requisition/${requisition._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requisition)
      });
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      const response = await fetchData();
      dispatch(actionRequest.pendingRequest());
      const transformedArray = serializeRequisition(response.requisition);
      dispatch(actionRequisition.updateRequisitions(transformedArray));
      dispatch(actionRequest.fulfilledRequest());
    } catch (error) {
      dispatch(actionRequest.rejectRequest());
      console.log(error);
    }
  }
}


