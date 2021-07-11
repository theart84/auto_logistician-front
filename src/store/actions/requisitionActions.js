import {actionRequisition} from "../requisition";
import {serializeRequisition} from "../../utils/serializeRequisitionData";
import {actionsUI} from "../ui";

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
      const response = await fetchData();
      dispatch(actionRequisition.getCurrentRequisitionById(response.requisition));
    } catch (error) {
      console.log(error);
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
      const transformedArray = serializeRequisition(response.requisition);
      dispatch(actionRequisition.updateRequisitions(transformedArray));
    } catch (error) {
      console.log(error);
    }
  }
}


