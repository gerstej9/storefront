import thunk from 'redux-thunk'
import configMockStore from 'redux-mock-store';
import { loadCategories } from '../store/categories.js'

const mockStore = configMockStore([thunk]);

describe('test load categories action', () => {
  it('should load categories', () => {
    let store = mockStore({
      categories:[],
      activeCategory: [],
    });
    return store.dispatch(loadCategories()).then(() =>{
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('LOAD_CATEGORIES');
      expect(dispatchedActions[0].payload.data.count >1).toBeTruthy();
    });
  });
})