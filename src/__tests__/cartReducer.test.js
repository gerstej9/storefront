import CartReducer from '../store/cart.js';

describe('Testing reducer component', () => {
  it('should update initial state when given initial state, action and payload', () => {
    let product =   {
      name: 'keyboard',
      category: 'electronics',
      description: 'Typing Device',
      price: 5,
      inventory: 10,
      cart: 0
    };

    let initialState = {
      cart: [],
      cartCount: 0
    }
    let newState = CartReducer(initialState, {type:'ADD_TO_CART', payload: product });
    expect(newState.cartCount).toEqual(1);
    expect(newState.cart).toEqual([product]);
  })
})