import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    Carts: []
}

export const martSlice =  createSlice({
    name: "Cart",
    initialState,
    reducers:{
        addData:(state, action)=>{
          state.Carts.push(action.payload)
        },

        addItems:(state, action)=>{
           
        },

        addToCart:(state, action)=>{
          const newItem = {
            id : nanoid(),
            name : action.payload.name,
            imageUrl1: action.payload.imageUrl1,
            color: action.payload.color,
            price: action.payload.price,
            quantity: action.payload.quantity,
            description: action.payload.description
          }
          console.log('here',action.payload);
          
          
          
          state.Carts.push(newItem)
        },

        addToDetails: (state,action)=>{
          const newItem = {
            id : nanoid(),
            name : action.payload.name,
            imageUrl1: action.payload.imageUrl1,
            color: action.payload.color,
            price: action.payload.price,
            quantity: action.payload.quantity,
            description: action.payload.description,
            size: action.payload.size
    
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

export const {addToCart, removeFromCart, addData, addToDetails} = martSlice.actions;

export default martSlice.reducer