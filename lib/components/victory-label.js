import React from "react";
import omit from "lodash.omit";
import { Text } from "react-native-svg";
import { VictoryLabel } from "victory-core/src";
import { NativeHelpers } from "../index";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: 0.71,
    lineHeight: 1
  };

  // Overrides method in victory-core
  renderElements(props) {
    const transform = NativeHelpers.getTransform(props);
    const style = NativeHelpers.getStyle(this.style);
    const textProps = {
      dx: this.dx, x: props.x, y: props.y, className: props.className,
      textAnchor: this.textAnchor
    };
    const dy = this.dy - this.getFontSize(style);
    return (
      <Text {...textProps} {...style} {...transform} {...props.events} dy={dy}>
        {this.content}
      </Text>
    );
  }
}
