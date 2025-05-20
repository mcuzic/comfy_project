import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './feaures/cart/cartSlice';
import userReducer from './feaures/user/userSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
