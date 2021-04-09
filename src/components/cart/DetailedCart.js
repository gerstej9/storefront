
import React from 'react';
import { useSelector } from 'react-redux'
import './DetailedCart.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    width: 325,
    maxHeight: 325,
  },
  media: {
    height: 150,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
  }
});


export default function DetailedCart (){
  let cart = useSelector(state => state.cart.cart);
  const classes = useStyles();
  console.log(cart);
  let total = 0;


  return (
    <div className="products">
      <h2>Cart</h2>
      <div id="productListing"className={classes.root}>
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Item Total</p>
          </div>
        {cart.map((product, i) => {
          total+=(product.price * product.cart)
          return (
          <div key={i} id="productListing"className={classes.root}>
            <p>{product.name}</p>
            <p>{product.cart}</p>
            <p>${product.price}</p>
            <p>${Math.round(product.price * product.cart)}</p>
          </div>
        )
      })}
            <div id="productListing"className={classes.root}>
            <p></p>
            <p></p>
            <p>Total</p>
            <p>${total}</p>
          </div>
              <Card style={{ width: '25', display: 'flex', justifyContent: 'space-between'}}>
          <Form>
          <section className="billing">
          <h3>Billing Address</h3>
              <input data-testid="toDoItem"
                name="name"
                placeholder="Full Name"
              />
            <input type="text" name="Address" placeholder="Address" />
            <input type="text" name="City" placeholder="City" />
            <input type="text" name="State" placeholder="State" />
            <input type="text" name="zip" placeholder="zip" />
            </section>
            <section className="payment">
              <h3>Payment</h3>
                <input data-testid="toDoItem"
                  name="car"
                  placeholder="Credit Card"
                />
              <input type="text" name="expiration" placeholder="Expiration" />
              <input type="text" name="cvv" placeholder="CVV" />
            </section>
            <div className="button">
            <Button className="order" data-testid="clickButton" variant="primary" type="submit">Place Order</Button>{' '}
            </div>
          </Form>
        </Card>
  </div>
  )
}