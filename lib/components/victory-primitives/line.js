import React from "react";
import { Line } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Line as VLine } from "victory-core";

export default class extends VLine {
  renderAxisLine(props, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Line {...props} {...nativeStyle} {...events} vectorEffect="non-scaling-stroke"/>;
  }
}
