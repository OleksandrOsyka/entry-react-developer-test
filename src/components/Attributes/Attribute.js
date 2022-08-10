import React, { Component } from "react";

import AttributeItem from "./AttributeItem";

class Attribute extends Component {
  render() {
    const { attribute, selectedItem, onSelectAttribute } = this.props;

    return (
      <div className="Attributes_attribute">
        <div className="Attributes_attributeName">{attribute.name}:</div>
        <div className="Attributes_attributeItems">
          {attribute.items.map((item) => {
            const isSelected = selectedItem === item.id;
            
            return (
              <AttributeItem
                key={item.id}
                item={item}
                attribute={attribute}
                isSelected={isSelected}
                onSelectAttribute={onSelectAttribute}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Attribute;
