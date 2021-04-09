
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Details.scss';


const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    maxHeight: 600,
    display:'flex',
    justifyContent:'center',
  },
  media: {
    height: 200,
    width: 200
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    width: 600,
    display: 'flex',
    justifyContent: 'center',
  }
});


export default function Products (){

  let product = useSelector(state => state.products.selectedProduct);
  const classes = useStyles();
  return(
    <div className="products">
      <Card className={classes.root}>
      <CardActionArea>
        <section className={classes.container}>
        <CardMedia
                className={classes.media}
                image="/logo192.png"
                title="Product Picture"
              />
        </section>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  ${product.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  In Stock: {product.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
      </Card>
    </div>
  )
}
