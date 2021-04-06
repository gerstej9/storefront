
import React from 'react';
import './Categories.scss';
import { connect } from 'react-redux';
import {switchCategory} from '../../store/categories.js';
import {switchProducts} from '../../store/products.js'
const Categories = (props) => {
  console.log(props);
  return(
    <div>
      <h2>Browse Our Categories</h2>
      {props.categories.map((category,i) => {
        return(
          <button key={i} onClick={() => { props.switchCategory(category.name); props.switchProducts(category.name);}} title={category.name}>{category.displayName}</button>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);