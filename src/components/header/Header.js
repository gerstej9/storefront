
import React from 'react';
import './Header.scss';
import Paper from '@material-ui/core/Paper'

function Header(){
  return(
    <Paper elevation={3} >
    <header className = "App-header" >
      <h1>OUR STORE</h1>
      <nav>
        <p>Cart(0)</p>
      </nav>
      </header>
      </Paper>
  )
}

export default Header;