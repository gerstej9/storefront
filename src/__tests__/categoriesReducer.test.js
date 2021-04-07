import CategoriesReducer from '../store/categories.js';

describe('Testing reducer component', () => {
  it('should update initial state when given initial state, action and payload', () => {


    let categoryList = [
      {
        name: 'electronics',
        displayName: 'ELECTRONICS',
        description: 'Technical Wonders',
        active: false,
      },
      {
        name: 'food',
        displayName: 'FOOD',
        description: 'Tasty Delights',
        active: false,
      }
    ]
    
    let initialState = {
      categories:categoryList,
      activeCategory: [],
    }

    let newState = CategoriesReducer(initialState, {type:'SWITCH_ACTIVE_CATEGORY', payload: 'food' });
    expect(newState.activeCategory).toEqual(categoryList[1]);
  })
})