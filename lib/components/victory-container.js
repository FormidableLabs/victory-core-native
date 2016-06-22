import React from "react";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";

export default class extends VictoryContainer {
  static defaultProps = {
    ...VictoryContainer.defaultProps
  };

  render() {
    const { style, width, height, events, children } = this.props;

    return (
      <Svg
        viewbox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        {...style}
        {...events}
      >
        {children}
      </Svg>
    );
  }
}
