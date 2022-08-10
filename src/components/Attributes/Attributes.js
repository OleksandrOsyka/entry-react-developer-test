import React, { Component } from "react";

import Attribute from "./Attribute";

class Attributes extends Component {
  render() {
    const { attributes, selectedAttributes, onSelectAttribute } = this.props;

    return (
      <div className="Attributes">
        {attributes.map((attribute) => {
          const selectedItem =
            selectedAttributes && selectedAttributes[attribute.id];
          return (
            <Attribute
              key={attribute.id}
              attribute={attribute}
              selectedItem={selectedItem}
              onSelectAttribute={onSelectAttribute || void(0)}
            />
          );
        })}
      </div>
    );
  }
}

export default Attributes;
