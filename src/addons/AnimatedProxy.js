import React from "react";
import PropTypes from "prop-types";
import { Motion, spring } from "react-motion";
import { SvgProxy } from "../";

/**
 * USAGE:
 * <AnimatedMotion selector="some css selector" start={{x:0, y:0}} target={{x:someValue, y:someValue}}
 */
const TransformMotion = props => (
  <Motion
    defaultStyle={props.start}
    style={{
      x: spring(props.target.x || 0),
      y: spring(props.target.y || 0),
      angle: spring(props.target.angle || 0),
      rotateX: spring(props.target.rotateX || 0),
      rotateY: spring(props.target.rotateY || 0)
    }}
  >
    {value => {
      const tr = `$ORIGINAL translate(${value.x},${value.y}) rotate(${value.angle} ${value.rotateX} ${value.rotateY})`;
      return <SvgProxy selector={props.selector} transform={tr} />;
    }}
  </Motion>
);

const transformShape = {
  x: PropTypes.number,
  y: PropTypes.number,
  angle: PropTypes.number,
  rotateX: PropTypes.number,
  rotateY: PropTypes.number
};

TransformMotion.propTypes = {
  start: PropTypes.shape(transformShape),
  target: PropTypes.shape(transformShape),
  selector: PropTypes.string.isRequired
};

TransformMotion.defaultProps = {
  start: { x: 0, y: 0, angle: 0, rotateX: 0, rotateY: 0 },
  target: { x: 0, y: 0, angle: 0, rotateX: 0, rotateY: 0 }
};

/**
 * Animates an attribute using react-motion.
 * React motion doesn't allow setting duration time
 * as it uses physics to interpolate, resulting in a natural motion.
 */
 const AttributeMotion = props => {
  const target = {};
  Object.keys(props.target).forEach(key => {
    target[key] = spring(props.target[key]);
  });
  return (
    <Motion defaultStyle={props.start} style={target}>
      {valObj => {
        const attributes = { ...valObj };
        Object.keys(attributes).forEach(key => {
          attributes[key] = props.formatValue(attributes[key]);
        });
        return <SvgProxy selector={props.selector} {...attributes} />;
      }}
    </Motion>
  );
};

AttributeMotion.propTypes = {
  selector: PropTypes.string.isRequired,
  start: PropTypes.object.isRequired,// eslint-disable-line
  target: PropTypes.object.isRequired,// eslint-disable-line
  formatValue: PropTypes.func
};

AttributeMotion.defaultProps = {
  formatValue: val => val.toString()
};


export {AttributeMotion, TransformMotion}