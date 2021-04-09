
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Products.scss';
import { getProducts, selectProduct} from '../../store/products.slice.js';
import { addToCart} from '../../store/cart.slice.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

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


export default function Products (){

  let category = useSelector(state => state.categories.activeCategory);
  let products = useSelector(state => state.products.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  const classes = useStyles();
  if(category.name){
    return (
      <div className="products">
        <h2>{category.name.toUpperCase()}</h2>
        <h2 className="description">{category.description}</h2>
          {products.map((product, i) => {
            let detailUrl = `/products/${product._id}`
            return (
            <Card key={i} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/logo192.png"
                title="Product Picture"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  ${product.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  IN STOCK: {product.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.buttonContainer}>
              <Button onClick={() => dispatch(addToCart(product))}size="small" color="primary">
                    ADD TO CART
              </Button>
              <NavLink className="viewDetails" onClick={() => dispatch(selectProduct(product))} activeClassName="selected" to={detailUrl} >VIEW DETAILS</NavLink>
            </CardActions>
          </Card>
          )
        })}
    </div>
    )
  }else{
    return(
      <div className="products">
        </div>
    )
  }
}
