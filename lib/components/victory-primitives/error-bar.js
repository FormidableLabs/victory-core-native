import React from "react";
import { G, Line } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { ErrorBar } from "victory-core";

export default class extends ErrorBar {
  renderErrorBar(error) {
    const {
      x,
      y,
      borderWidth,
      style,
      events
    } = this.props;

    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <G>
        <Line
          key="borderRight"
          {...events}
          {...nativeStyle}
          x1={error.errorRight}
          x2={error.errorRight}
          y1={y - borderWidth}
          y2={y + borderWidth}
        />
        <Line
          key="borderLeft"
          {...events}
          {...nativeStyle}
          x1={error.errorLeft}
          x2={error.errorLeft}
          y1={y - borderWidth}
          y2={y + borderWidth}
        />
        <Line
          key="borderBottom"
          {...events}
          {...nativeStyle}
          x1={x - borderWidth}
          x2={x + borderWidth}
          y1={error.errorBottom}
          y2={error.errorBottom}
        />
        <Line
          key="borderTop"
          {...events}
          {...nativeStyle}
          x1={x - borderWidth}
          x2={x + borderWidth}
          y1={error.errorTop}
          y2={error.errorTop}
        />
        <Line
          key="crossTop"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={x}
          y1={y}
          y2={error.errorTop}
          shapeRendering="optimizeSpeed"
        />
        <Line
          key="crossBottom"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={x}
          y1={y}
          y2={error.errorBottom}
          shapeRendering="optimizeSpeed"
        />
        <Line
          key="crossLeft"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={error.errorLeft}
          y1={y}
          y2={y}
          shapeRendering="optimizeSpeed"
        />
        <Line
          key="crossRight"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={error.errorRight}
          y1={y}
          y2={y}
          shapeRendering="optimizeSpeed"
        />
      </G>
    );
  }
}
