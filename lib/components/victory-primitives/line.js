import React from "react";
import { Line as line } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Line } from "victory-core";

export default class extends Line {
  renderAxisLine(props, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <line {...props} {...nativeStyle} {...events} vectorEffect="non-scaling-stroke"/>;
  }
}
