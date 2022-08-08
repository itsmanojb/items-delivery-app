import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  modalData: {
    type: '',
    data: null
  },
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action) => {
      state.visible = true;
      state.modalData = action.payload
    },
    hide: (state) => {
      state.visible = false;
      state.modalData = {
        type: '',
        data: null
      };
    }
  },
})

export default modalSlice.reducer
export const { show, hide } = modalSlice.actions;