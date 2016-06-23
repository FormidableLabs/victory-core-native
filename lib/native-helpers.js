export default {
  getStyles(props) {
    // TODO parse styles for native
    return props.style;
  },

  getTransform(props) {
    // todo parse transform for native
    const style = props.style;
    const angle = props.angle || style.angle;
    const transform = props.transfrom || style.transform;
    const rotation = angle && { rotate: angle };
    return Object.assign({}, transform, rotation);
  }
};