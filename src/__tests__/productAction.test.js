import thunk from 'redux-thunk'
import configMockStore from 'redux-mock-store';
import { loadProducts } from '../store/products.js'

const mockStore = configMockStore([thunk]);

describe('test load products action', () => {
  it('should load products', () => {
    let store = mockStore({
      productsList: [],
      products: [],
    });
    return store.dispatch(loadProducts()).then(() =>{
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('LOAD_PRODUCTS');
      expect(dispatchedActions[0].payload.count >1).toBeTruthy();
    });
  });
})