import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import CurrencySwitcher from "../CurrencySwitcher";
import CartDropdown from "../CartDropdown";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <div className="Header_navigation">
          <NavLink to="products/all">ALL</NavLink>
          <NavLink to="products/clothes">CLOTHES</NavLink>
          <NavLink to="products/tech">TECH</NavLink>
        </div>

        <div className="Header_logo">
          <Logo />
        </div>

        <div className="Header_actions">
          <CurrencySwitcher />
          <CartDropdown />
        </div>
        
      </div>
    );
  }
}

export default Header;