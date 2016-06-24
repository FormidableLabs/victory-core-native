import { omit } from "lodash";

export default {

  getStyle(props) {
    // TODO: more style fixes for Native?
    const style = props.style;
    const strokeProperties = [
      "stroke", "strokeWidth", "strokeOpacity", "strokeDasharray",
      "strokeDashoffset", "strokeLinecap", "strokeLinejoin"
    ];
    return style.stroke === "none" || style.stroke === "transparent" ?
      omit(style, strokeProperties) : style;
  },

  getTransform(props) {
    const parseTransformString = (str) => {
      const translate = str.match(/translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/);
      const scale = str.match(/scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/);
      const rotate = str.match(/rotate\(\s*([^\s,)]+)/);
      return {
        translateX: translate[1], translateY: translate[2],
        scaleX: scale[1], scaleY: scale[2], rotate: rotate[1]
      };
    };

    const style = props.style;
    const baseTransform = props.transform || style.transform;
    const transform = typeof baseTransform !== "string" ?
      baseTransform : parseTransformString(baseTransform);
    const angle = props.angle || style.angle;
    return Object.assign({rotate: angle}, transform);
  }
};