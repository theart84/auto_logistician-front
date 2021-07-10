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
