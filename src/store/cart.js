import axios from "axios";

let initialState = {
  cart: [],
  cartCount: 0
}

let newCart;

export default function CartReducer(state=initialState, action){
  let {type, payload} = action;

  switch(type){
    case "ADD_TO_CART":
    state.cartCount++;
    if(!state.cart.includes(payload)){
      payload.cart = 1
      newCart = [...state.cart, payload];
    }else{
      payload.cart+= 1;
      newCart = [...state.cart]
      
    }
    return {cart: newCart, cartCount: state.cartCount};
    default: return state;
  }
}

export const addToCart = (name) => (dispatch, getState) =>{
  if(name.inStock > 0){
    name.inStock --; 
  }
  return axios({
    method: 'put',
    url: `https://api-js401.herokuapp.com/api/v1/products/${name._id}`,
    data: name,
  })
  .then(response => {
    console.log(response.data);
    dispatch({
      type: "ADD_TO_CART",
      payload: name,
    });
  });
}
  