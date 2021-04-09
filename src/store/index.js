import {configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './categories.slice.js';
import productsReducer from'./products.slice.js';
import cartReducer from './cart.slice.js';

let reducers = {
  cart: cartReducer, 
  products: productsReducer, 
  categories: categoriesReducer
};

const store = configureStore({reducer: reducers});

export default store;