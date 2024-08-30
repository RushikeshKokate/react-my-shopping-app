import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Wishlists: [],
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const newItem = {
        id: nanoid(),
        name: action.payload.name,
        imageUrl1: action.payload.imageUrl1,
        color: action.payload.color,
        price: action.payload.price,
        quantity: action.payload.quantity,
        description: action.payload.description,
        count: action.payload.count,
      };
      console.log("here", action.payload);

      state.Wishlists.push(newItem);
    },
    removeFromWish: (state, action) => {
      state.Wishlists = state.Wishlists.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWish, removeFromWish } = wishSlice.actions;

export default wishSlice.reducer;
