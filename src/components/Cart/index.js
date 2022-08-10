import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./style.css";

class Cart extends Component {
  render() {
    console.log(this.props.cart)
    const { cart } = this.props;

    return (
      <div className="Cart">
        <div className="Cart_heading">CART</div>
        <div className="Cart_break" />
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <CartSummary />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
