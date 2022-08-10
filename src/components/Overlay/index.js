import React, { Component } from "react";
import { connect } from 'react-redux';

import './style.css';

class Overlay extends Component {
    render() {
        const { overlayShow } = this.props;

        return(
            <>{overlayShow && <div className="Overlay"></div>}</>
        );
    }
}

const mapStateToProps = (state) => ({ overlayShow: state.overlayShow });

export default connect(mapStateToProps)(Overlay);