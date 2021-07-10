import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  requisition: [],
  tableHead: ['#', 'Номер заявки', 'Дата', 'Название фирмы', 'ФИО перевозчика', 'Контактный телефон', 'АТИ код', 'Комментарий'],
}

const requisitionSlice = createSlice({
  name: 'requisition',
  initialState,
  reducers: {
    initialFetch(state, action) {
      console.log(action.payload)
      state.requisition = action.payload;

    }
  }
});

export const actionRequisition = requisitionSlice.actions;
export default requisitionSlice;
