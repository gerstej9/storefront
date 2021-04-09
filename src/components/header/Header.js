
import React from 'react';
import './Header.scss';
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

function Header(props){
  return(
    <Paper elevation={3} >
    <header className = "App-header" >
      <h1>OUR STORE</h1>
      <nav>
        <NavLink activeClassName="selected" to="/" >Store</NavLink>
        <NavLink activeClassName="selected" to="/cart" >Cart({props.cart.cartCount})</NavLink>
      </nav>
      </header>
      </Paper>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);