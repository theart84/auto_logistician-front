import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  requestStatus: null
}

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    initialRequest(state) {
      state.requestStatus = null;
    },
    pendingRequest(state) {
      state.requestStatus = 'pending';
    },
    fulfilledRequest(state) {
      state.requestStatus = 'fulfilled';
    },
    rejectRequest(state) {
      state.requestStatus = 'reject';
    }
  }
});

export const actionRequest = requestSlice.actions;
export default requestSlice;
