
import React, { useEffect } from 'react';
import './Categories.scss';
import { connect } from 'react-redux';
import {switchCategory, loadCategories} from '../../store/categories.js';
import {switchProducts} from '../../store/products.js'

const Categories = (props) => {
  useEffect(() => {
    props.loadCategories();
  }, [])

  return(
    <div>
      <h2>Browse Our Categories</h2>
      {props.categories.map((category,i) => {
        return(
          <button key={i} onClick={() => { props.switchCategory(category.name); props.switchProducts(category.name);}} title={category.name}>{category.name.toUpperCase()}</button>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    activeCategory: state.categories.activeCategory,
    categories: state.categories.categories
  }
}

const mapDispatchToProps = {
  switchCategory,
  switchProducts,
  loadCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);