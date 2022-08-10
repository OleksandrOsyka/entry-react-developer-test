import React, { Component } from "react";
import { connect } from 'react-redux';

class PriceLabel extends Component {
    getPrice = () => {
        const { prices, currency } = this.props;
        const price = prices.find((item) => item.currency.label === currency.label);
        return price;
    }
    render() {
        const price = this.getPrice();

        return(
            <div className="PriceLabel">{price.currency.symbol}{price.amount}</div>
        );
    }
}

const mapStateToProps = (state) => ({ currency: state.currency });

export default connect(mapStateToProps)(PriceLabel);