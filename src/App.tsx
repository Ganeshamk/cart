import React, { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Products from './components/products/products';
import Cart from './components/cart/cart';
import ProductDetails from './components/product-details/product-details';
import ProductService from './components/services/data.services';

function App() {

  const ProductsReducer = ((state: any, products: any) => {
    return products;
  });

  const SearchReducer = ((state: any, searchText: any) => {
    return searchText;
  });

  const [products, setProducts] = useReducer(ProductsReducer, ProductService.getProducts());
  const [searcProducts, setSearcProducts] = useReducer(ProductsReducer, []);

  const [searchText, setSearchText] = useReducer(SearchReducer, '');

  useEffect(() => {
    searchHandler(searchText ? 'SEACHED_PRODUCTS' : 'ALL_PRODUCTS');
  }, [searchText, products]);

  const searchHandler = (condition: any) => {
    switch (condition) {
      case 'ALL_PRODUCTS': setSearcProducts(products);
        break;

      case 'SEACHED_PRODUCTS': setSearcProducts(products.filter((product: any) => {
        return product.name.toLowerCase().includes(searchText.toLowerCase());
      }));
        break;

      default: setSearcProducts(products);
        break;
    };
  };

  return (
    <>
      <Router>
        <div>
          <Header searchText={searchText} setSearchText={setSearchText} />
          <Switch>
            <React.Fragment>
              <div className="content">
                <Route exact path="/">
                  <Products searcProducts={searcProducts} products={products} setProducts={setProducts} />
                </Route>

                <Route path="/products">
                  <Products searcProducts={searcProducts} products={products} setProducts={setProducts} />
                </Route>

                <Route path="/product-details/:id">
                  <ProductDetails products={products} setProducts={setProducts} />
                </Route>

                <Route path="/cart">
                  <Cart products={products} setProducts={setProducts} />
                </Route>
              </div>
            </React.Fragment>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
