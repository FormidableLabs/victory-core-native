import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Bar } from "victory-core";

export default class extends Bar {
  renderBar(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Path d={path} {...nativeStyle} {...events}/>;
  }
}
