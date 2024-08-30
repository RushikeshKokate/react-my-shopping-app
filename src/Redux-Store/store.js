import { configureStore } from "@reduxjs/toolkit";
import MartReducer from '../feature/martSlice';
import WishReducer from '../feature/wishlistSlice';

export const store = configureStore({
  reducer: {
    Cart: MartReducer,
    wish: WishReducer,
  },
});
