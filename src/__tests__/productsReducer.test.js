import ProductsReducer from '../store/products.js';

describe('Testing reducer component', () => {
  it('should update initial state when given initial state, action and payload', () => {

    
    
    let initialState = {
      products: [],
      productList: [],
    }

    let newState = ProductsReducer(initialState, {type:'ADD_TO_CART', payload: 'food' });
    newState = ProductsReducer(initialState, {type:'FILTER_PRODUCTS', payload: 'food' });
    expect(newState.products).toBeTruthy();
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
    expect(newState.products[0].inventory).toEqual(7);
  })
})