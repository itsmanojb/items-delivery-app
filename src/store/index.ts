import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cart'
import modalReducer from './modal'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;