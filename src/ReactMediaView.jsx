import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./_react-media-view.scss";

class ReactMediaView extends Component {
  render() {
    const {
      className,
      name
    } = this.props;
    const containerClassName = classNames(
      "react-media-view",
      className
    );
    
    return (
      <div className={containerClassName}>{name}</div>
    );
  }
}

ReactMediaView.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default ReactMediaView;
