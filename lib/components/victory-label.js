import React from "react";
import { Text } from "react-native-svg";
import { VictoryLabel } from "victory-core/src";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: "0.71",
    lineHeight: "1"
  };

  getTransform(props) {
    const {datum, style, x, y} = props;
    const angle = props.angle || style.angle;
    const transform = props.transfrom || style.transform;
    const transformaton = transform && Helpers.evaluateProp(transform, datum);
    const rotation = angle && { rotate: angle };
    return Object.assign({}, transformaton, rotation);
  }

  renderElements(props, content) {
    const transform = this.getTransform(props);
    return (
      <Text {...props} {...props.style} {...transform}>
        {content}
      </Text>
    );
  }
}
