import React, { Component } from "react";

import PriceLabel from "../../PriceLabel";
import Attributes from "../../Attributes";
import ImageSlideshow from "../ImageSlideshow";
import { ReactComponent as PlusSquare } from "../../../assets/plusSquare.svg";
import { ReactComponent as MinusSquare } from "../../../assets/minusSquare.svg";
import {
  IncrementQuantityButton,
  DecrementQuantityButton,
} from "../../ChangeQuantityButtons";
import "./style.css";

class CartItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <>
        <div className="CartItem">
          <div className="CartItem_info">
            <div className="CartItem_brand">{item.product.brand}</div>
            <div className="CartItem_name">{item.product.name}</div>
            <PriceLabel prices={item.product.prices} />
            <Attributes
              attributes={item.product.attributes}
              selectedAttributes={item.selectedAttributes}
            />
          </div>

          <div className="CartItem_quantityCounter">
            <IncrementQuantityButton item={item}>
              <PlusSquare />
            </IncrementQuantityButton>
            <div className="CartItem_quantity">{item.quantity}</div>
            <DecrementQuantityButton item={item}>
              <MinusSquare />
            </DecrementQuantityButton>
          </div>
          <ImageSlideshow images={item.product.gallery} />
        </div>
        <div className="CartItem_break" />
      </>
    );
  }
}

export default CartItem;
