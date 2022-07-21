import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="products/:categoryId" element={<Products />}/>
          <Route path="product/:productId" element={<Product />}/>
          <Route path="cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;