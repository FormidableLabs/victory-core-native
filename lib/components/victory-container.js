import React from "react";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";
import { NativeHelpers } from "../index";
import { Portal } from "../index";

export default class extends VictoryContainer {
  // Overrides method in victory-core
  renderContainer(props, svgProps, style) {
    const { className, standalone } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return standalone || standalone === undefined ?
      (
        <svg {...svgProps} {...nativeStyle} className={className}>
          {this.getChildren(props)}
          <Portal ref={this.savePortalRef}/>
        </svg>
      ) :
      (
        <g {...svgProps} {...nativeStyle} className={className}>
          {this.getChildren(props)}
          <Portal ref={this.savePortalRef}/>
        </g>
      );
  }
}
