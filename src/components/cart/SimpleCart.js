
import React from 'react';
import './SimpleCart.scss';
import { connect } from 'react-redux';
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

const SimpleCart = (props) => {
  const classes = useStyles();
  if(props.cart.length > 0){
    return(
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            {props.cart.map((product, i) => {
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

const mapStateToProps = (state) =>{
  return{
    cart: state.cart.cart,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);