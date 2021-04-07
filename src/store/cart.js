
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
    payload.cart++;
    if(!state.cart.includes(payload)){
      newCart = [...state.cart, payload];
    }else{
      newCart = [...state.cart]
      
    }
    return {cart: newCart, cartCount: state.cartCount};
    default: return state;
  }
}

export function addToCart(name){
  return{
    type: "ADD_TO_CART",
    payload: name,
  }
}

