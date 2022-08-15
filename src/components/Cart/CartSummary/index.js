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
          <tr className="CartSummary_tableRow">
            <th className="CartSummary_tableHeader">Tax 21%: </th>
            <td className="CartSummary_tableData">
              {tax.symbol}
              {tax.amount}
            </td>
          </tr>
          <tr className="CartSummary_tableRow">
            <th className="CartSummary_tableHeader">Quantity: </th>
            <td className="CartSummary_tableData">{quantity}</td>
          </tr>
          <tr className="CartSummary_tableRow">
            <th className="CartSummary_tableHeader bold">Total: </th>
            <td className="CartSummary_tableData">
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
