import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  preloader: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showPreloader(state) {
      state.preloader = true
    },
    hidePreloader(state) {
      state.preloader = false;
    }
  }
})

export const actionsUI = uiSlice.actions;
export default uiSlice;
