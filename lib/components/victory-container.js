import React from "react";
import { omit } from "lodash";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";

export default class extends VictoryContainer {
  static defaultProps = {
    ...VictoryContainer.defaultProps
  };

  render() {
    const { style, width, height, events, children } = this.props;
    const nativeStyle= omit(style, ["width", "height"]);
    return (
      <Svg
        viewbox={`0 0 ${width} ${height}`}
        style={style}
        {...nativeStyle}
        {...events}
      >
        {children}
      </Svg>
    );
  }
}
