import React from "react";
import { Path } from "react-native-svg";
import NativeHelpers from "../native-helpers";
import { Curve } from "victory-core";

export default class extends Curve {
  renderLine(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Path d={path} {...nativeStyle} {...events}/>;
  }
}
