import './App.css';
import { Provider } from 'react-redux';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Products from './components/products/Products.js'
import Categories from './components/categories/Categories.js'
import Container from '@material-ui/core/Container';
import store from'./store/index.js';

function App() {
  return (
    <Container>
      <Provider store={store()}>
        <Header></Header>
        <Categories></Categories>
        <Products></Products>
        <Footer></Footer>
      </Provider>
    </Container>
  );
}

export default App;
