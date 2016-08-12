import React from "react-native";
import { render } from "enzyme";
import { expect } from "chai";

import VictoryContainer from "../../lib/components/victory-container";
import VictoryLabel from "../../lib/components/victory-label";

const components = [
  { component: VictoryContainer, name: "VictoryContainer" },
  { component: VictoryLabel, name: "VictoryLabel" }
];

describe("Default render", () => {
  components.forEach((c) => {
    it(`should work for ${c.name}`, () => {
      const wrapper = render(React.createElement(c.component));
      expect(wrapper).to.have.length(1);
    });
  });
});
