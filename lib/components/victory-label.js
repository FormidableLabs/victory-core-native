import React from "react";
import { Text } from "react-native-svg";
import { VictoryLabel } from "victory-core/src";
import { NativeHelpers } from "../index";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: "0.71",
    lineHeight: "1"
  };

  renderElements(props, content) {
    const transform = NativeHelpers.getTransform(props);
    const { style, events } = props;
    return (
      <Text {...props} {...props.style} {...transform}>
        {content}
      </Text>
    );
  }
}
