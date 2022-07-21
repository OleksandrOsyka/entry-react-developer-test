import React, { Component } from "react";
import withRouter from "../hoc/withRouter";
import { connect } from 'react-redux';
import { getProduct } from "../actions/index";

class Product extends Component {

    componentDidMount() {
        const { productId } = this.props.router.params;
        console.log(productId);
        this.props.dispatch(getProduct(productId));
        console.log(this.props);
    }
    render() {
        console.log(this.props)
        const product = this.props.product;
        return (
            <div>
                <h1>Product</h1>
                {product ? 
                <span>{product.data.product.name}</span> :
                null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ product: state.product });

export default withRouter(connect(mapStateToProps)(Product));