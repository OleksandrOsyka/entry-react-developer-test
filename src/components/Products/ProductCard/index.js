import React, { Component } from "react";

import withRouter from "../../../hoc/withRouter";
import PriceLabel from "../../PriceLabel";
import AddToCartButton from "../../AddToCartButton";
import { ReactComponent as CartIcon } from "../../../assets/emptyCartLight.svg";
import "./style.css";

class ProductCard extends Component {
  handleClick = () => {
    const { navigate } = this.props.router;
    const { id } = this.props.product;
    navigate(`/product/${id}`);
  };

  render() {
    const { product, product: { brand, name, prices, gallery, attributes, inStock } } =
      this.props;

    return (
      <div className="ProductCard" onClick={this.handleClick}>
        <div className="ProductCard_imageContainer">
          <img className="ProductCard_image" src={gallery[0]} alt={name} />

          {!inStock && (
            <div className="ProductCard_overlayText">OUT OF STOCK</div>
          )}
          
          {(attributes.length === 0 && inStock) && (
            <AddToCartButton
              product={product}
              quantity={1}
              selectedAttributes={{}}
            >
              <CartIcon />
            </AddToCartButton>
          )}
        </div>

        <div className="ProductCard_info">
          <div className="ProductCard_title">
            {brand} {name}
          </div>
          <PriceLabel prices={prices} />
        </div>

        {!inStock && <div className="ProductCard_overlay"></div>}
      </div>
    );
  }
}

export default withRouter(ProductCard);