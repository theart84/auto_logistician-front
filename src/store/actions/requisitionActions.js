import {actionRequisition} from "../requisition";
import {actionsUI} from "../ui";
import {actionRequest} from "../request";
import {baseURL} from "../../config/config";

export const fetchRequisitionData = () => {
  return async (dispatch) => {
    dispatch(actionsUI.showPreloader())
    const fetchData = async () => {
      const request = await fetch(baseURL);
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      const response = await fetchData();
      dispatch(actionRequisition.initialFetch(response.requisition));
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
      const request = await fetch(baseURL, {
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
      dispatch(actionRequisition.updateRequisitions(response.requisition));
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
      const request = await fetch(`${baseURL}/${id}`, {
        method: 'DELETE'
      });
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      const response = await fetchData();
      dispatch(actionRequisition.updateRequisitions(response.requisition));
      dispatch(actionsUI.hidePreloader());
    } catch (error) {
      console.log(error);
    }
  }
}

export const getRequisitionById = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const request = await fetch(`${baseURL}/${id}`);
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
      const request = await fetch(`${baseURL}/${requisition._id}`, {
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
      dispatch(actionRequisition.updateRequisitions(response.requisition));
      dispatch(actionRequest.fulfilledRequest());
    } catch (error) {
      dispatch(actionRequest.rejectRequest());
      console.log(error);
    }
  }
}

export const searchRequisition = (query) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const request = await fetch(`${baseURL}/search?${query}`);
      if (!request.ok) {
        throw new Error('Ошибка получения данных!')
      }
      return request.json()
    }
    try {
      dispatch(actionsUI.showPreloader())
      dispatch(actionRequest.pendingRequest());
      const response = await fetchData();
      dispatch(actionRequisition.updateRequisitions(response.data));
      dispatch(actionsUI.hidePreloader())
      dispatch(actionRequest.fulfilledRequest());
    } catch (error) {
      console.log(error);
      dispatch(actionRequest.rejectRequest());
    }
  }
}


