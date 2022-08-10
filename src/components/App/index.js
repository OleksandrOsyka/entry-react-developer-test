import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../Header";
import Products from "../Products";
import Product from "../Product";
import Cart from "../Cart";
import Overlay from "../Overlay";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Overlay />

        <Routes>
          <Route path="*" element={<Navigate to="products/all" />} />
          <Route path="products/:categoryId" element={<Products />}/>
          <Route path="product/:productId" element={<Product />}/>
          <Route path="cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;