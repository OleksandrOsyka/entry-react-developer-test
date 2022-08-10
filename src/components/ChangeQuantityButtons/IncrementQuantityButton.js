import React, { Component } from "react";
import { connect } from 'react-redux';

class IncrementButton extends Component {
    handleIncrement = () => {
        const { selectedAttributes, product } = this.props.item;
        this.props.dispatch({ type: "INCREMENT_QUANTITY", payload: { selectedAttributes, product }});
    } 

    render() {
        const { children } = this.props;
        return(
            <button className="IncrementQuantityButton" onClick={this.handleIncrement}>{children}</button>
        );
    }
}

export default connect()(IncrementButton);