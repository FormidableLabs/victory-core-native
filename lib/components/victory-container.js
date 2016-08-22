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
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
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
