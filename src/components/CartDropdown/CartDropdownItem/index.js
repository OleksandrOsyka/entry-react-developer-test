import React, { Component } from "react";

import { ReactComponent as PlusSquare } from "../../../assets/plusSquareSmall.svg";
import { ReactComponent as MinusSquare } from "../../../assets/minusSquareSmall.svg";
import {
  IncrementQuantityButton,
  DecrementQuantityButton,
} from "../../ChangeQuantityButtons";
import PriceLabel from "../../PriceLabel";
import Attributes from "../../Attributes";
import "./style.css";


class CartDropdownItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="CartDropdownItem">
        <div className="CartDropdownItem_info">
          <div className="CartDropdownItem_title">{item.product.brand}</div>
          <div className="CartDropdownItem_title">{item.product.name}</div>
          <PriceLabel prices={item.product.prices} />
          <Attributes
            attributes={item.product.attributes}
            selectedAttributes={item.selectedAttributes}
            onSelectAttribute={this.handleAttributeSelect}
          />
        </div>

        <div className="CartDropdownItem_quantityCounter">
          <IncrementQuantityButton item={item}>
            <PlusSquare />
          </IncrementQuantityButton>
          <div className="CarDropdownItem_quantity">
            {item.quantity}
          </div>
          <DecrementQuantityButton item={item}>
            <MinusSquare />
          </DecrementQuantityButton>
        </div>
        <div className="CartDropdownItem_imageContainer">
          <img
            className="CartDropdownItem_image"
            src={item.product.gallery[0]}
            alt={item.product.name}
          />
        </div>
      </div>
    );
  }
}

export default CartDropdownItem;
