
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
    products: [],
    selectedProduct: [],
  },
  reducers:{
    loadProducts(state, action){
      state.productList = action.payload.results;
    },
    filterProducts(state, action){
      let newProductList = state.productList;
      state.products = newProductList.filter(product => product.category === action.payload);
    },
    addToCart(state, action){
      let newList = state.products;
      state.products = newList.filter(product => product.inStock !== 0);
    },
    selectProduct(state, action){
      state.selectedProduct = action.payload;
    }
  }
})

export const { selectProduct, loadProducts, filterProducts, addToCart } = productsSlice.actions;

export const getProducts = () => async (dispatch) =>{
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
  let data = response.data;
  dispatch(loadProducts(data));
}

export default productsSlice.reducer;