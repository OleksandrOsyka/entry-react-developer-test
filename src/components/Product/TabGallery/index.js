import React, { Component } from "react";
import "./style.css";

class TabGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { expandedImage: null };
  }

  handleSelect = (src) => this.setState({ expandedImage: src });

  render() {
    const { images } = this.props;
    const { expandedImage } = this.state;

    return (
      <div className="TabGallery">
        <div className="TabGallery_tabImages">
          {images.map((image) => (
            <div className="TabGallery_tabImageContainer" key={image}>
              <img
                className="TabGallery_tabImage"
                src={image}
                alt=""
                onClick={() => this.handleSelect(image)}
              />
            </div>
          ))}
        </div>
        <div className="TabGallery_expandedImageContainer">
          <img
            className="TabGallery_expandedImage"
            src={expandedImage || images[0]}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default TabGallery;
