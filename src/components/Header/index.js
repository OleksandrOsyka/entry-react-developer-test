import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import CurrencySwitcher from "../CurrencySwitcher";
import CartDropdown from "../CartDropdown";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { fetchCategories } from "../../api";
import "./style.css";

class Header extends Component {
  state = { categories: [] };

  componentDidMount() {
    fetchCategories().then(({ categories }) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="Header">
        <div className="Header_navigation">
          {categories.map((category) => (
            <NavLink key={category.name} to={`products/${category.name}`}>
              {category.name}
            </NavLink>
          ))}
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
