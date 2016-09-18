import React from "react";
import { Path, G, ClipPath, Defs } from "react-native-svg";
import { Voronoi } from "victory-core";
import { NativeHelpers } from "../../index";

export default class extends Voronoi {
  renderPoint(paths, style, events) {
    const clipId = `clipPath-${Math.random()}`;
    const nativeStyle = NativeHelpers.getStyle(style);
    return paths.circle ?
      (
        <G>
          <Defs>
            <ClipPath id={clipId}>
              <Path d={paths.voronoi}/>
            </ClipPath>
          </Defs>
          <Path
            d={paths.circle}
            clipPath={`url(#${clipId})`}
            {...nativeStyle}
            {...events}
          />
        </G>
      ) :
      <Path d={paths.voronoi} {...nativeStyle} {...events}/>;
  }
}
