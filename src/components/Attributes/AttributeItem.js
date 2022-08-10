import React, { Component } from "react";

class AttributeItem extends Component {
    render() {
        const { item, attribute, isSelected, onSelectAttribute } = this.props;

        if(attribute.type === "text") {
        return <div className={isSelected ? "Attributes_attributeItemText Attributes_attributeItemText_selected" : "Attributes_attributeItemText"} onClick={onSelectAttribute ? () => onSelectAttribute(attribute.id, item.id) : undefined}>{item.displayValue}</div>
        }

        if(attribute.type === "swatch") {
            return <div className={isSelected ? "Attributes_attributeItemSwatch Attributes_attributeItemSwatch_selected" : "Attributes_attributeItemSwatch"} onClick={onSelectAttribute ? () => onSelectAttribute(attribute.id, item.id) : undefined} style={{backgroundColor: item.value}}></div>
        }
    }
}

export default AttributeItem;