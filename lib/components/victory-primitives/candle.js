import React from "react";
import { Line, Rect } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Candle } from "victory-core";
import omit from "lodash.omit";


export default class extends Candle {
   // Overrides method in victory-core
  renderWick(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Line {...omit(props, "style")} {...nativeStyle}/>;
  }

  // Overrides method in victory-core
  renderCandle(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Rect {...omit(props, "style")} {...nativeStyle}/>;
  }
}
