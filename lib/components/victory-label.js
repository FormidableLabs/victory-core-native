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

  formatContent(content) {
    if (Array.isArray(content) && content.length > 0) {
      return content.map((line) => {
        return line === "" ? " " : `${line}`;
      });
    }
    return " ";
  }

  renderElements(props, content) {
    const transform = NativeHelpers.getTransform(props);
    const style = NativeHelpers.getStyle(props.style);
    const baseProps = omit(props, ["style", "transform", "events", "scale"]);
    const dy = props.dy - this.getFontSize(style);
    const text = this.formatContent(content);
    return (
      <Text {...baseProps} {...style} {...transform} {...props.events} dy={dy}>
        {text}
      </Text>
    );
  }
}
