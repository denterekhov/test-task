// Core
import React, { Component } from "react";
import { number } from "prop-types";

// Instruments
import { getDisplayName } from "./";

const decorateSvg = (
  { viewBoxWidth = 0, viewBoxHeight = 0, width = 0, height = 0 } = {},
  Enhanceable
) => {
  class withSvg extends Component {
    static propTypes = {
      height: number.isRequired,
      width: number.isRequired
    };

    static defaultProps = {
      color2: "#f00",
      width,
      height
    };

    state = {
      hover: false
    };

    _getEnhanceableProps = () => {
      const enhanceableProps = Object.assign({}, this.state, this.props);

      delete enhanceableProps.width;
      delete enhanceableProps.height;

      return enhanceableProps;
    };

    _getSvgStyle = () => ({
      width: this.props.width,
      height: this.props.height
      // display: 'block',
    });

    _getWrapperStyle = () => {
      // const { inlineBlock } = this.props;

      return {
        width: this.props.width,
        height: this.props.height
        // display: inlineBlock ? 'inline-block' : 'block',
      };
    };

    _handleMouseEnter = () => {
      this.setState({
        hover: true
      });
    };

    _handleMouseLeave = () => {
      this.setState({
        hover: false
      });
    };

    render() {
      const { className, disabled } = this.props;
      const anchorClassName = disabled ? "disabledLink" : null;
      const wrapperStyle = this._getWrapperStyle();
      const svgStyle = this._getSvgStyle();
      const enhanceableProps = this._getEnhanceableProps();

      return (
        <div
          className={className}
          style={wrapperStyle}
          onMouseEnter={disabled ? null : this._handleMouseEnter}
          onMouseLeave={disabled ? null : this._handleMouseLeave}
        >
          <a className={anchorClassName} href="#">
            <svg
              style={svgStyle}
              version="1.1"
              viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            >
              <Enhanceable {...enhanceableProps} />
            </svg>
          </a>
        </div>
      );
    }
  }

  withSvg.displayName = `withSvg(${getDisplayName(Enhanceable)})`;

  return withSvg;
};

export const withSvg = config => Enhanceable =>
  decorateSvg(config, Enhanceable);
