/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet
} from "react-native";
import Svg from "react-native-svg";
import { VictoryLabel, VictoryTooltip } from "../lib";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#e1d7cd",
    flex: 1
  }
});

class Demo extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Svg height="500" width="300">
          <VictoryLabel
            x={150}
            y={150}
            text="Hello"
            textAnchor="middle"
            style={{
              fontSize: "14px",
              letterSpacing: "normal",
              fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
              fill: "black",
              stroke: "transparent",
              padding: 8,
              textAnchor: "start",
              strokeWidth: 0
            }}
          />
          <VictoryLabel
            x={150}
            y={200}
            text="wow"
            angle={"45"}
            textAnchor="middle"
            style={{
              fontSize: 25,
              fill: "black"
            }}
          />
          <VictoryTooltip
            x={100}
            y={300}
            text={"Wow!\nTooltips!"}
            active={true}
          />
          <VictoryTooltip
            x={150}
            y={300}
            text={"Wow!\nTooltips!"}
            style={{
              fontSize: 15
            }}
            active={false}
          />
        </Svg>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("Demo", () => Demo);
