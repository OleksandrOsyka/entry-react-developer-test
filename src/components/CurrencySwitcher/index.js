import React, { Component } from "react";
import { connect } from "react-redux";

import { getCurrencies } from "../../actions";
import "./style.css";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { show: false };
  }

  componentDidMount() {
    this.props.dispatch(getCurrencies());
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleSelect = (currency) => {
    this.props.dispatch({ type: "SET_CURRENCY", payload: { currency } });
    this.setState({ show: !this.state.show });
  };

  handleToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  handleClickOutside = (event) => {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      if (this.state.show) {
        this.setState({ show: false });
      }
    }
  };

  render() {
    const { currencies, currency } = this.props;
    const { show } = this.state;
    return (
      <div className="CurrencySwitcher" ref={this.ref}>
        <div className="CurrencySwitcher_icon" onClick={this.handleToggleClick}>
          <div className="CurrencySwitcher_selectedCurrency">
            {currency.symbol}{" "}
            {show && (
              <div className="CurrencySwitcher_dropdownContent">
                {currencies.map((currency) => (
                  <div key={currency.label} onClick={() => this.handleSelect(currency)}>
                    <div className="CurrencySwitcher_dropdownContentItem">
                      {currency.symbol} {currency.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <ArrowDown />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currencies: state.currencies, currency: state.currency });

export default connect(mapStateToProps)(CurrencySwitcher);