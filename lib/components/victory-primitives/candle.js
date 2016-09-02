import React from "react";
import { Line, Rect } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Candle } from "victory-core";

export default class extends Candle {
  renderWick(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Line {...props} {...nativeStyle}/>;
  }

  renderCandle(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Rect {...props} {...nativeStyle}/>;
  }
}
