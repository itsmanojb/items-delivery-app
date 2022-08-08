import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartPanel: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showCart: (state) => {
      state.cartPanel = true;
    },
    hideCart: (state) => {
      state.cartPanel = false;
    }
  },
})

export default uiSlice.reducer
export const { showCart, hideCart } = uiSlice.actions;