import React, { Component } from "react";
import { Link } from "react-router-dom";

import CurrencySwitcher from "./CurrencySwitcher";

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="products/all">All</Link>
        </li>
        <li>
          <Link to="products/clothes">Clothes</Link>
        </li>
        <li>
          <Link to="products/tech">Tech</Link>
        </li>
        <li>
            <CurrencySwitcher />
        </li>
      </ul>
    );
  }
}


export default Navigation;
