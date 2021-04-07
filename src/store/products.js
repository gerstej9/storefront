
let productList = [
  {
    name: 'keyboard',
    category: 'electronics',
    description: 'Typing Device',
    price: 5,
    inventory: 10,
    cart: 0
  },
  {
    name: 'Mouse',
    category: 'electronics',
    description: 'Mousing Device',
    price: 10,
    inventory: 5,
    cart: 0
  },
  {
    name: 'Kumquats',
    category: 'food',
    description: 'Delicious',
    price: 20,
    inventory: 2,
    cart: 0
  },
  {
    name: 'Kiwi',
    category: 'food',
    description: 'Yummy',
    price: 3,
    inventory: 7,
    cart: 0
  },
]

let initialState = {
  products: [],
}

let newProducts

export default function ProductsReducer(state=initialState, action){
  let {type, payload} = action;

  switch(type){
    case "FILTER_PRODUCTS":
    newProducts = productList.filter(product => product.category === payload);
    return {products: newProducts};

    case 'ADD_TO_CART':
    if(payload.inventory > 0){
      payload.inventory --; 
    }
    newProducts = state.products.filter(product => product.inventory !== 0);
    return {products: newProducts};

    default: return state;
  }
}

export function switchProducts(name){
  return{
    type: "FILTER_PRODUCTS",
    payload: name,
  }
}

export function decreaseInventory(product){
  return{
    type: "REDUCE_INVENTORY",
    payload: product
  }
}