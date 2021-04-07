import ProductsReducer from '../store/products.js';

describe('Testing reducer component', () => {
  it('should update initial state when given initial state, action and payload', () => {


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
      products: productList,
    }

    let foodProducts = [
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

    let newState = ProductsReducer(initialState, {type:'FILTER_PRODUCTS', payload: 'food' });
    expect(newState.products).toEqual(foodProducts);
  })
  it('should update inventory count', () => {


  let kiwi =
      {
        name: 'Kiwi',
        category: 'food',
        description: 'Yummy',
        price: 3,
        inventory: 7,
        cart: 0
      }
    
    let initialState = {
      products: [kiwi]
    }

    let newState = ProductsReducer(initialState, {type:'ADD_TO_CART', payload: kiwi });
    expect(newState.products[0].inventory).toEqual(6);
  })
})