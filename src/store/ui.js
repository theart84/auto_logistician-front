import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  preloader: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showPreloader(state, action) {
      state.preloader = true
    },
    hidePreloader(state, action) {
      state.preloader = false;
    }
  }
})

export const actionsUI = uiSlice.actions;
export default uiSlice;
