import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice ({
  name: 'cart',
  initialState: {
    cart: [],
    cartCount: 0
  },
  reducers:{
    add(state, action){
      state.cartCount++;
      let found = false;
      for(let i = 0; i < state.cart.length; i++){
        if(state.cart[i].name === action.payload.name){
          state.cart[i].cart++;
          found = true;
        }
      }
      if(!found){
        let product = action.payload
        product.cart = 1
        state.cart.push(action.payload);
      }
    }
  },
})


export const { add } = cartSlice.actions;

export const addToCart = (name) => async (dispatch) =>{
  let item = {...name};
  if(item.inStock > 0){
    item.inStock --; 
  }
  await axios({
    method: 'put',
    url: `https://api-js401.herokuapp.com/api/v1/products/${name._id}`,
    data: item,
  });
    dispatch(add(item));
}

export default cartSlice.reducer;


  