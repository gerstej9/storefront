import './App.css';
import { Provider } from 'react-redux';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Products from './components/products/Products.js'
import Categories from './components/categories/Categories.js'
import Container from '@material-ui/core/Container';
import store from'./store/index.js';
import SimpleCart from './components/cart/SimpleCart.js'

function App() {
  return (
    <Container>
      <Provider store={store()}>
        <Header></Header>
        <div className = "topLevel">
        <Categories></Categories>
        <SimpleCart></SimpleCart>
        </div>
        <Products></Products>
        <Footer></Footer>
      </Provider>
    </Container>
  );
}

export default App;
