import React from "react";
import { Path } from "react-native-svg";
import { Slice } from "victory-core";
import NativeHelpers from "../native-helpers";

export default class extends Slice {
  renderSlice(props) {
    return (
      <Path
        d={props.pathFunction(props.slice)}
        {...NativeHelpers.getStyle(props.style)}
        {...props.events}
      />
    );
  }
}
