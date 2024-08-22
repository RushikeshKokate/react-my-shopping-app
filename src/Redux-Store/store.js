import { configureStore } from "@reduxjs/toolkit";
import MartReducer from '../feature/martSlice'

export const store = configureStore({
    reducer: {
        Cart:  MartReducer, 
      },
})
