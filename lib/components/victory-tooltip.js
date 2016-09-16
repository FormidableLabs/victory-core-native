import React from "react";
import { G } from "react-native-svg";
import { VictoryTooltip } from "victory-core/src";
import { VictoryLabel, Flyout } from "../index";

export default class extends VictoryTooltip {
  static defaultProps = {
    ...VictoryTooltip.defaultProps,
    labelComponent: <VictoryLabel/>,
    flyoutComponent: <Flyout/>,
    groupComponent: <G/>
  };

  static defaultEvents = [{
    target: "data",
    eventHandlers: {
      onTouchStart: () => {
        return {
          target: "labels",
          mutation: () => {
            return { active: true };
          }
        };
      },
      onTouchEnd: () => {
        return {
          target: "labels",
          mutation: () => {
            return { active: false };
          }
        };
      }
    }
  }];
}
