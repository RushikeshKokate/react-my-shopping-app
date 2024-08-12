import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Carts: []
}

export const martSlice =  createSlice({
    name: "Cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
          const newItem = {
            id : nanoid(),
            name : action.payload.name,
            price: action.payload.price,
            quantity: action.payload.quantity,
            description: action.payload.description
          }
          state.Carts.push(newItem)
        },

        removeFromCart: (state, action)=>{
          state.Carts = state.Carts.filter((item)=>{ 
            return item.id !== action.payload
           }
        )
        }
    }
})

export const {addToCart, removeFromCart} = martSlice.actions;

export default martSlice.reducer