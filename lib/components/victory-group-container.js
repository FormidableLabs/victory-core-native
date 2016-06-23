import React from "react";
import { G } from "react-native-svg";
import { VictoryGroupContainer } from "victory-core/src";
import { NativeHelpers } from "../index";


export default class extends VictoryGroupContainer {
  static defaultProps = {
    ...VictoryGroupContainer.defaultProps
  };

  render() {
    const styles = NativeHelpers.getStyles(this.props);;
    const transforms = NativeHelpers.getTransform(this.props)
    return (
      <G {...styles} {...transforms}>
        {this.props.children}
      </G>
    );
  }
}
