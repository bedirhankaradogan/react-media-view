import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./_react-media-view.scss";

class ReactMediaView extends Component {
  static propTypes = {
    media: PropTypes.array.isRequired,
    className: PropTypes.string,
    columnCount: PropTypes.number,
    rowHeight: PropTypes.number,
    gap: PropTypes.number,
    emptyState: PropTypes.node,
    stretchLastItem: PropTypes.bool,
    overlayTrigger: PropTypes.oneOf(["mount", "hover", "click", "toggle"]),
    overlay: PropTypes.func,
    image: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
    media: [],
    columnCount: 3,
    rowHeight: 200,
    gap: 1,
    emptyState: "There is no media to show :(",
  }
  
  constructor(props) {
    super(props);

    this.state = {
      computedMedia: this.getComputedMedia(props)
    }
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.media !== nextProps.media) {
      this.setState({
        computedMedia: this.getComputedMedia(nextProps)
      });
    }
    
    return true;
  }

  getComputedMedia(props) {
    const {
      media,
      overlayTrigger,
      overlay
    } = props;
    let computedMedia = media;

    if(overlay) {
      computedMedia = media.map(medium => ({
        ...medium,
        isOverlayVisible: overlayTrigger === "mount" ? true : false
      }));
    }

    return computedMedia;
  }

  handleMouseEnter = (key, medium, event) => {
    const {
      overlayTrigger,
      overlay,
      onMouseEnter
    } = this.props;
    const {computedMedia} = this.state;

    if(overlay && overlayTrigger === "hover") {
      computedMedia[key].isOverlayVisible = true;
      this.setState({
        computedMedia
      });
    }

    if(onMouseEnter) {
      onMouseEnter(medium, event);
    }
  }

  handleMouseLeave = (key, medium, event) => {
    const {
      overlayTrigger,
      overlay,
      onMouseLeave
    } = this.props;
    const {computedMedia} = this.state;

    if(overlay && (overlayTrigger === "hover" || overlayTrigger === "click")) {
      computedMedia[key].isOverlayVisible = false;
      this.setState({
        computedMedia
      });
    }

    if(onMouseLeave) {
      onMouseLeave(medium, event);
    }
  }

  handleClick = (key, medium, event) => {
    const {
      overlayTrigger,
      overlay,
      onClick
    } = this.props;
    const {computedMedia} = this.state;

    if(overlay && (overlayTrigger === "click" || overlayTrigger === "toggle")) {

      let isOverlayVisible;

      if(overlayTrigger === "toggle") {
        isOverlayVisible = !computedMedia[key].isOverlayVisible;
      }else if(overlayTrigger === "click") {
        isOverlayVisible = true;
      }

      computedMedia[key].isOverlayVisible = isOverlayVisible;
      this.setState({
        computedMedia
      });
    }

    if(onClick) {
      onClick(medium, event);
    }
  }

  renderMedia = () => {
    const {
      className,
      columnCount,
      rowHeight,
      gap,
      emptyState,
      stretchLastItem,
      overlay,
      image
    } = this.props;
    const {computedMedia} = this.state;
    const mediumCount = computedMedia.length;
    const lastRowMediumCount = mediumCount % columnCount;
    const lastItemSpanCount = columnCount - lastRowMediumCount + 1;
    const containerClassName = classNames(
      "react-media-view",
      className
    );

    document.documentElement.style.setProperty("--grid-template-column-count", columnCount);
    document.documentElement.style.setProperty("--grid-gap", `${gap}px`);
    document.documentElement.style.setProperty("--row-height", `${rowHeight}px`);

    if(mediumCount > 0) {
      return (
        <div className={containerClassName}>
          {computedMedia.map((medium, key) => {
              const {
                src,
                isOverlayVisible
              } = medium;
              let elementStyle = {};

              if(stretchLastItem && mediumCount === key + 1) {
                elementStyle = {
                  gridColumn: `${lastRowMediumCount} / span ${lastItemSpanCount}`
                }
              }

              return (
                <div key={key.toString()}
                     className={"react-media-view-element"}
                     style={elementStyle}
                     onMouseEnter={this.handleMouseEnter.bind(this, key, medium)}
                     onMouseLeave={this.handleMouseLeave.bind(this, key, medium)}
                     onClick={this.handleClick.bind(this, key, medium)}>
                  {image ?
                    image(medium) :
                    (<img className={"react-media-view-element-image"}
                          src={src}/>)}

                  {overlay && isOverlayVisible &&
                  <div className={"react-media-view-element-overlay"}>
                    {overlay(medium)}
                  </div>}
                </div>
              );
            })}
        </div>
      );
    }else{
      return emptyState;
    }
  }

  render() {
    return (
      <div className={"react-media-view-container"}>
        {this.renderMedia()}
      </div>
    );
  }
}

export default ReactMediaView;
