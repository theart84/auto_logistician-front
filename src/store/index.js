import {configureStore} from "@reduxjs/toolkit";
import requisitionSlice from "./requisition";
import uiSlice from "./ui";

const store = configureStore({
  reducer: {
    requisition: requisitionSlice.reducer,
    ui: uiSlice.reducer
  }
});

export default store;
