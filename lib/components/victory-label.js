import React from "react";
import { omit } from "lodash";
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
    const style = NativeHelpers.getStyle(props);
    const baseProps = omit(props, ["style", "transform", "events"]);
    return (
      <Text {...baseProps} {...style} {...transform} {...props.events}>
        {content}
      </Text>
    );
  }
}
