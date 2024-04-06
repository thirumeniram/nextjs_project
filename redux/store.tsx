import { configureStore } from '@reduxjs/toolkit';

import displayReducer from './features/display_slice';
import cartReducer from './features/cart_slice'

export const store =configureStore({
  reducer: {
    display: displayReducer,
    cart:cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;