import './App.css';
import { Provider } from 'react-redux';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Products from './components/products/Products.js'
import Categories from './components/categories/Categories.js'
import Container from '@material-ui/core/Container';
import store from'./store/index.js';
import SimpleCart from './components/cart/SimpleCart.js'
import DetailedCart from './components/cart/DetailedCart.js'
import ProductDetail from './components/details/Details.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Container>
      <Provider store={store}>
          <Header></Header>
          <Switch>
            <Route path="/products/:id">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/cart">
              <DetailedCart></DetailedCart>
            </Route>
            <Route path="/">
              <div className = "topLevel">
              <Categories></Categories>
              <SimpleCart></SimpleCart>
              </div>
              <Products></Products>
            </Route>
          </Switch>
          <Footer></Footer>
      </Provider>
    </Container>
    </BrowserRouter>
  );
}


export default App;
