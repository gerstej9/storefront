
import React, { useEffect } from 'react';
import './Categories.scss';
import { useSelector, useDispatch } from 'react-redux';
import {switchCategory, getCategories} from '../../store/categories.slice.js';
import {filterProducts} from '../../store/products.slice.js'

export default function Categories() {

  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
  }, [])

  let categories = useSelector(state => state.categories.categories);

  return(
    <div>
      <h2>Browse Our Categories</h2>
      {categories.map((category,i) => {
        return(
          <button key={i} onClick={() => { dispatch(switchCategory(category.name)); dispatch(filterProducts(category.name));}} title={category.name}>{category.name.toUpperCase()}</button>
        )
      })}
    </div>
  )
}
