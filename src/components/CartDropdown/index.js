import React, { Component } from "react";
import { connect } from "react-redux";

import withRouter from "../../hoc/withRouter";
import { ReactComponent as EmptyCartIcon } from "../../assets/emptyCart.svg";
import CartDropdownItem from "./CartDropdownItem";
import "./style.css";

class CartDropdown extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { show: false };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleToggleClick = () => {
    const { dispatch, overlayShow } = this.props;
    dispatch({ type: "SET_OVERLAY", payload: { overlayShow: !overlayShow } });
    this.setState({ show: !this.state.show });
  };

  handleOpenCart = () => {
    const { navigate } = this.props.router;
    this.handleToggleClick();
    navigate(`/cart`);
  };

  handleClickOutside = (event) => {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      if (this.state.show) {
        this.setState({ show: false });
        this.props.dispatch({
          type: "SET_OVERLAY",
          payload: { overlayShow: false },
        });
      }
    }
  };

  getQuantity = () => {
    return this.props.cart.reduce((sum, item) => sum + item.quantity, 0);
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
    const { cart } = this.props;

    const { show } = this.state;

    const quantity = this.getQuantity();
    const total = this.getTotal();

    return (
      <div className="CartDropdown" ref={this.ref}>
        <div className="CartDropdown_icon" onClick={this.handleToggleClick}>
          <div style={{ paddingTop: "4px" }}>
            <EmptyCartIcon />
            {quantity > 0 && (
              <div className="CartDropdown_quantityBadge">{quantity}</div>
            )}
          </div>
        </div>
        {show && (
          <div className="CartDropdown_dropdownContent">
          
            <div className="CartDropdown_Title">
            My Bag, <span className="CartDropdown_Quantity">
                {quantity} {quantity === 1 ? "item" : "items"} </span>
              </div>
            
              {cart && cart.map((item) => <CartDropdownItem item={item} key={item.id} />)}
            
            <div className="CartDropdown_total">
                Total <span className="CartDropdown_totalValue">
                {total.symbol}
                {total.amount}
              </span>
              </div>
              
            <div className="CartDropdown_buttonGroup">
              <button
                className="CartDropdown_viewBagButton"
                onClick={this.handleOpenCart}
              >
                VIEW BAG
              </button>
              <button className="CartDropdown_checkOutButton">
                CHECK OUT
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
  overlayShow: state.overlayShow,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
