import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  preloader: false,
  showCreateModal: false,
  showEditModal: false,
  contextMenu: {
    isShow: false,
    offSetX: 0,
    offSetY: 0,
  }
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
    },
    showCreateModal(state) {
      state.showCreateModal = true
    },
    hideCreateModal(state) {
      state.showCreateModal = false;
    },
    showEditModal(state) {
      state.showEditModal = true
    },
    hideEditModal(state) {
      state.showEditModal = false;
    },
    showContextMenu(state, action) {
      state.contextMenu.isShow = true;
      state.contextMenu.clientX= action.payload.clientX;
      state.contextMenu.clientY= action.payload.clientY;
    },
    hideContextMenu(state) {
      state.contextMenu.isShow = false;
    },
  }
})

export const actionsUI = uiSlice.actions;
export default uiSlice;
