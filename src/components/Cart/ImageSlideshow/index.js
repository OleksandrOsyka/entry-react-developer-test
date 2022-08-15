import React, { Component } from "react";

import { ReactComponent as ArrowLeft } from "../../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/arrowRight.svg";
import "./style.css";

class ImageSlideshow extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
  }

  increment = () => {
    const { currentSlide } = this.state;
    const { images } = this.props;

    if (currentSlide + 1 > images.length - 1) {
      this.setState({ currentSlide: 0 });
    } else {
      this.setState({ currentSlide: currentSlide + 1 });
    }
  };

  decrement = () => {
    const { currentSlide } = this.state;
    const { images } = this.props;

    if (currentSlide - 1 < 0) {
      this.setState({ currentSlide: images.length - 1 });
    } else {
      this.setState({ currentSlide: currentSlide - 1 });
    }
  };

  render() {
    const { images } = this.props;

    const { currentSlide } = this.state;

    return (
      <div className="ImageSlideshow_container">
        <img src={images[currentSlide]} alt="" />
        {images.length > 1 && (
          <>
            <button
              className="ImageSlideshow_button ImageSlideshow_buttonPrevious"
              onClick={this.decrement}
            >
              <ArrowLeft />
            </button>
            <button
              className="ImageSlideshow_button ImageSlideshow_buttonNext"
              onClick={this.increment}
            >
              <ArrowRight />
            </button>
          </>
        )}
      </div>
    );
  }
}

export default ImageSlideshow;
