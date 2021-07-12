import {configureStore} from "@reduxjs/toolkit";
import requisitionSlice from "./requisition";
import uiSlice from "./ui";
import requestSlice from "./request";

const store = configureStore({
  reducer: {
    requisition: requisitionSlice.reducer,
    ui: uiSlice.reducer,
    request: requestSlice.reducer
  }
});

export default store;
