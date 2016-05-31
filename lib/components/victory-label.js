import React from "react";
import { Text } from "react-native-svg";
import { VictoryLabel } from "victory-core/src";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: "0.71",
    lineHeight: "1"
  };

  renderLabel({content, dx, dy, style, textAnchor, transform}) {
    return (
      <Text
        x={this.props.x}
        y={this.props.y}
        dx={dx * style.fontSize}
        dy={dy * style.fontSize - style.fontSize}
        textAnchor={textAnchor}
        transform={transform}
        style={style}
        fontSize={style.fontSize}
        fontWeight={style.fontWeight}
        fill={style.fill}
        {...this.props.events}
      >
        {content}
      </Text>
    );
  }
}
