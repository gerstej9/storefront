import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories:[],
    activeCategory: [],
  },
  reducers:{
    loadCategories(state,action){
      state.categories = action.payload.data.results;
    },
    switchCategory(state, action){
      state.activeCategory = state.categories.filter(category => category.name === action.payload)[0];
    }
  }
})

export const { loadCategories, switchCategory } = categoriesSlice.actions;

export const getCategories = () => async (dispatch) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
  dispatch(loadCategories(response));
}

export default categoriesSlice.reducer;
