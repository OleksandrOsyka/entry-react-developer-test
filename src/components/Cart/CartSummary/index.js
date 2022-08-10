import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";

class CartSummary extends Component {
  getTax = (total) => {
    const amount = (total.amount * 0.21).toFixed(2);
    return { amount, symbol: total.symbol };
  };

  getQuantity = () => {
    const { cart } = this.props;

    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    return quantity;
  };

  getTotal = () => {
    const { cart, currency } = this.props;

    const total = cart
      .reduce((sum, item) => {
        const amount = item.product.prices.find(
          (price) => price.currency.label === currency.label
        ).amount;
        return sum + amount * item.quantity;
      }, 0)
      .toFixed(2);

    return { amount: total, symbol: currency.symbol };
  };
  render() {
    const total = this.getTotal();
    const quantity = this.getQuantity();
    const tax = this.getTax(total);

    return (
      <table className="CartSummary">
        <tbody>
        <tr>
          <th>Tax 21%: </th>
          <td>
            {tax.symbol}
            {tax.amount}
          </td>
        </tr>
        <tr>
          <th>Quantity: </th>
          <td>{quantity}</td>
        </tr>
        <tr>
          <th style={{ fontWeight: "500" }}>Total: </th>
          <td>
            {total.symbol}
            {total.amount}
          </td>
        </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps)(CartSummary);
