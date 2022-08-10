import React, { Component } from "react";
import { connect } from 'react-redux';

class AddToCartButton extends Component {
    handleAddToCart = event => {
        event.stopPropagation();
        const { product, selectedAttributes, quantity, dispatch } = this.props;
        dispatch({ type: "ADD_TO_CART", payload: { product, selectedAttributes, quantity }});
    }

    render() {
        const { product, selectedAttributes, children } = this.props;

        const isInvalid = Object.keys(selectedAttributes).length !== product.attributes.length || !product.inStock;

        return(
            <button className="AddToCartButton" disabled={isInvalid} onClick={this.handleAddToCart}>{children}</button>
        );
    }
}



export default connect()(AddToCartButton);