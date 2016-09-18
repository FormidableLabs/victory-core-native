import React from "react";
import { Path } from "react-native-svg";
import { Flyout } from "victory-core";
import { NativeHelpers } from "../../index";

export default class extends Flyout {
  renderFlyout(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style)
    return (
      <Path d={path} {...nativeStyle} {...events}/>
    );
  }
}