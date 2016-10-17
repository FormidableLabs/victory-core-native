import React from "react";
import { G } from "react-native-svg";
import { NativeHelpers, ClipPath } from "../index";
import { VictoryClipContainer } from "victory-core";
import omit from "lodash.omit";

export default class extends VictoryClipContainer {
  static defaultProps = {
    ...VictoryClipContainer.defaultProps,
    clipComponent: <ClipPath/>
  };

  renderClippedGroup(props, clipComponent, clipId) {
    const { style, events, transform, children } = props;
    const nativeStyle = omit(NativeHelpers.getStyle(style), ["y"]);
    return (
      <G {...nativeStyle} {...events} transform={transform}>
        {clipComponent}
        <G clipPath={`url(#${clipId})`}>
          {children}
        </G>
      </G>
    );
  }

  renderGroup(props) {
    const { style, events, children, transform } = props;
    const nativeStyle = omit(NativeHelpers.getStyle(style), ["y"]);
    return (
      <G {...nativeStyle} {...events} transform={transform}>
        {children}
      </G>
    );
  }
}
