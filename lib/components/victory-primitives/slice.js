import React from "react";
import { Path } from "react-native-svg";
import { Slice } from "victory-core";
import { NativeHelpers } from "../../index";

export default class extends Slice {

  renderSlice(path, style, events) {
    const { role, shapeRendering } = this.props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <Path
        d={path}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
