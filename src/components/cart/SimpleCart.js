
import React from 'react';
import './SimpleCart.scss';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    backgroundColor: "gray",
  }
});

export default function SimpleCart (){

  let cart = useSelector(state => state.cart.cart);
  const classes = useStyles();

  if(cart.length > 0){
    return(
      <Card className={classes.root} id="cart">
        <CardActionArea>
          <CardContent id="cartContent">
            {cart.map((product, i) => {
                return (
                    <Typography key={i}>
                      {product.name}: {product.cart}
                    </Typography>
                  )}
                )}
          </CardContent>
        </CardActionArea>
       </Card>
    )
  }else{
    return(
      <div>

      </div>
    )
  }
}
