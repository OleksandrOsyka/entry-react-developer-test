import React, { Component } from "react";
import { connect } from "react-redux";

import withRouter from "../../hoc/withRouter";
import { getProduct } from "../../actions/index";
import PriceLabel from "../PriceLabel";
import AddToCartButton from "../AddToCartButton";
import Attributes from "../Attributes";
import TabGallery from "./TabGallery";
import "./style.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAttributes: {} };
  }

  handleAttributeSelect = (attributeId, attributeItemId) => {
    this.setState({
      selectedAttributes: {
        ...this.state.selectedAttributes,
        [attributeId]: attributeItemId,
      },
    });
  };

  componentDidMount() {
    const { productId } = this.props.router.params;
    this.props.dispatch(getProduct(productId));
  }

  componentWillUnmount() {
    this.props.dispatch({ type: "CLEAR_PRODUCT" });
  }

  render() {
    const { product } = this.props;

    const { selectedAttributes } = this.state;

    return (
      <div>
        {product && (
          <div className="Product">
            <TabGallery images={product.gallery} />

            <div className="Product_info">
              <div className="Product_brand">{product.brand}</div>
              <div className="Product_name">{product.name}</div>
              <Attributes
                attributes={product.attributes}
                selectedAttributes={selectedAttributes}
                onSelectAttribute={this.handleAttributeSelect}
              />
              <div className="Product_price">PRICE:</div>
              <PriceLabel prices={product.prices} />
              <AddToCartButton
                product={product}
                quantity={1}
                selectedAttributes={selectedAttributes}
              >
                ADD TO CART
              </AddToCartButton>
              <div
                className="Product_description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ product: state.product });

export default withRouter(connect(mapStateToProps)(Product));