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

  const CategoriesReducer = ((state: any, categories: any) => {
    return categories;
  });

  const CategoriesDataReducer = ((state: any, categoriesData: any) => {
    return categoriesData;
  });

  const filterdCategories: any[] = [];
  ProductService.getProducts().forEach((product: any) => {
    if (filterdCategories.findIndex((category: any) => category.name === product.category) < 0) {
      filterdCategories.push({
        name: product.category,
        status: false
      });
    }
  });

  const [products, setProducts] = useReducer(ProductsReducer, ProductService.getProducts());
  const [searcProducts, setSearcProducts] = useReducer(ProductsReducer, []);
  const [categories, setCategories] = useReducer(CategoriesReducer, []);
  const [searchText, setSearchText] = useReducer(SearchReducer, '');
  const [categoriesData, setCategoriesData] = useReducer(CategoriesDataReducer, filterdCategories);

  useEffect(() => {
    searchHandler(searchText || categories.length > 0 ? 'FILTERED_PRODUCTS' : 'ALL_PRODUCTS');
  }, [searchText, products, categories]);

  const searchHandler = (condition: any) => {
    switch (condition) {
      case 'ALL_PRODUCTS': setSearcProducts(products);
        break;

      case 'FILTERED_PRODUCTS': setSearcProducts(products.filter((product: any) => {
        if (categories && categories.length > 0 && categories.findIndex((item: any) => {
          return item.name === product.category;
        }) < 0) {
          return;
        }
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
                  <Products categoriesData={categoriesData} setCategoriesData={setCategoriesData} categories={categories} setCategories={setCategories} searcProducts={searcProducts} products={products} setProducts={setProducts} searchText={searchText} setSearchText={setSearchText} />
                </Route>

                <Route path="/products">
                  <Products categoriesData={categoriesData} setCategoriesData={setCategoriesData} categories={categories} setCategories={setCategories} searcProducts={searcProducts} products={products} setProducts={setProducts} searchText={searchText} setSearchText={setSearchText} />
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
