
import React from 'react';
import './Header.scss';
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux';

function Header(props){
  return(
    <Paper elevation={3} >
    <header className = "App-header" >
      <h1>OUR STORE</h1>
      <nav>
        <p>Cart({props.cart.cartCount})</p>
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