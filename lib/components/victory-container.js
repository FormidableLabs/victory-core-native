import React from "react";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";
import { NativeHelpers } from "../index";

export default class extends VictoryContainer {
  static defaultProps = {
    ...VictoryContainer.defaultProps
  };

  render() {
    const { width, height, events, children, style } = this.props;
    const styles = NativeHelpers.getStyle(style);
    return (
      <Svg
        viewbox={`0 0 ${width} ${height}`}
        {...styles}
        height={+height}
        width={+width}
        {...events}
      >
        {children}
      </Svg>
    );
  }
}
