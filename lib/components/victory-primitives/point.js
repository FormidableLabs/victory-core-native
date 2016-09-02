import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Point } from "victory-core";

export default class extends Point {
  renderPoint(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Path d={path} {...nativeStyle} {...events}/>;
  }
}
