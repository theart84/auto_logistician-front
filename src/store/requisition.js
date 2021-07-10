import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  requisition: [],
  currentRequisitionId: null,
  currentRequisition: {},
  tableHead: ['#', 'Номер заявки', 'Дата', 'Название фирмы', 'ФИО перевозчика', 'Контактный телефон', 'АТИ код', 'Комментарий'],
}

const requisitionSlice = createSlice({
  name: 'requisition',
  initialState,
  reducers: {
    initialFetch(state, action) {
      state.requisition = action.payload;
    },
    updateRequisitions(state, action) {
      state.requisition = action.payload;
    },
    choiceCurrentRequisition(state, action) {
      state.currentRequisitionId = action.payload
    },
    getCurrentRequisitionById(state, action) {
     state.currentRequisition = action.payload;
    }
  }
});

export const actionRequisition = requisitionSlice.actions;
export default requisitionSlice;
