import React from "react";

import {VictoryTransition} from "victory-core";

export default ({animate, ...props}) => {
  return <VictoryTransition animate={false} {...props} />;
};
