/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from "lodash";
import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet
} from "react-native";
import Svg from "react-native-svg";
import { VictoryLabel } from "../lib";

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
        <Svg height="300" width="300">
          <VictoryLabel
            x={150}
            y={150}
            text="Hello"
            textAnchor="middle"
            style={{
              fontSize: 25,
              fill: "black"
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
        </Svg>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("Demo", () => Demo);
