import React from "react";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";
import { NativeHelpers } from "../index";
import { Portal } from "../index";
import omit from "lodash.omit";

export default class extends VictoryContainer {
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    portalComponent: <Portal/>
  };


  renderContainer(props, svgProps, style) {
    const { children, portalComponent } = props;
    return (
      <svg {...svgProps} style={style}>
        <title id="title">{title}</title>
        <desc id="desc">{desc}</desc>
        {children}
        {React.cloneElement(portalComponent, {ref: this.savePortalRef})}
      </svg>
    );
  }
}
