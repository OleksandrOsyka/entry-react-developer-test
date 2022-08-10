import React, { Component } from "react";
import { connect } from 'react-redux';

class DecrementButton extends Component {
    handleDecrement = () => {
        const { selectedAttributes, product } = this.props.item;
        this.props.dispatch({ type: "DECREMENT_QUANTITY", payload: { selectedAttributes, product }});
    }

    render() {
        const { children } = this.props;
        return(
            <button className="DecrementQuantityButton" onClick={this.handleDecrement}>{children}</button>
        );
    }
}

export default connect()(DecrementButton);