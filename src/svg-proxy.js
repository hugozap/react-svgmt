import React from "react";
import PropTypes from "prop-types";
import SVGContext from "./svg-context";

const hasNamespaceRegexp = /(\w+)_(\S+)/;
const supportedNamespaces = {
  xlink: "http://www.w3.org/1999/xlink"
};

/*
 * SvgProxy works as a virtual svg node.
 * @selector: The css selector of the element
 * @onElementSelected: callback in case the svg node is needed
 * @children : string supported (for text elements
 */
export default class SvgProxy extends React.Component {
  constructor(props) {
    super(props);
    // DOM references to the selected nodes
    this.elemRefs = [];
    this.svgRef = null;
    this.path = null;
    this.originalValues = {};
    this.onSvgUpdated = this.onSvgUpdated.bind(this);
    this.updateSvgElements = this.updateSvgElements.bind(this);
  }

  componentDidMount() {
    this.updateSvgElements(this.props);
  }

  componentDidUpdate(prevProps) {
      // If the selector property changed, reset the selected references
    if (this.props.selector !== prevProps.selector) {
      this.elemRefs = [];
    }
    // If a prop has changed then update the element
    this.updateSvgElements(this.props);
  }

  onSvgUpdated() {
    // force to reapply updates
    this.updateSvgElements(this.props, true);
  }

  updateSvgElements(nextProps, force) {
    const { svgRef } = this;

    if (svgRef && (this.elemRefs.length === 0 || force)) {
      // We don't have the svg element reference.

      const nodes = [].slice.apply(svgRef.querySelectorAll(nextProps.selector));
      if (nodes.length === 0 && ["svg", "root"].indexOf(nextProps.selector) !== -1) {
        // If the selector equls 'svg' or 'root' use the svg node
        nodes.push(svgRef);
      }
      // Call the onElementSelected callback with the element (or array)
      if (nextProps.onElementSelected && nodes.length) {
        nextProps.onElementSelected(nodes.length === 1 ? nodes[0] : nodes);
      }

      this.elemRefs = nodes;
    }

    if (this.elemRefs) {
      const propkeys = Object.keys(nextProps);
      for (let i = 0; i < propkeys.length; i += 1) {
        const propName = propkeys[i];
        // Ignore component props
        const ownprop = ["selector", "onElementSelected"].indexOf(propName) !== -1;
        if (!ownprop) {
          let nsPrefix = null;
          let nsValue = null;
          let attrNameWithoutPrefix = propName;
          let attrNamePrefixed = null;
          // TODO: check performance implications (for animations) of testing everytime
          const r = hasNamespaceRegexp.exec(propName);
          if (r && r[1]) {
            // eslint-disable-next-line
            nsPrefix = r[1];
            nsValue = supportedNamespaces[nsPrefix];
            // eslint-disable-next-line
            attrNameWithoutPrefix = r[2];
            attrNamePrefixed = `${nsPrefix}:${attrNameWithoutPrefix}`;
          } else {
            attrNamePrefixed = propName;
          }
          // Apply attributes to node
          for (let elemix = 0; elemix < this.elemRefs.length; elemix += 1) {
            const elem = this.elemRefs[elemix];
            if (typeof nextProps[propName] === "function") {
              elem[propName.toLowerCase()] = nextProps[propName];
            } else {
              // Discard non string props
              // TODO: Support style conversion
              if (typeof nextProps[propName] !== "string") {
                return;
              }

              // Save originalValue
              if (this.originalValues[propName] == null) {
                this.originalValues[propName] =
                  elem.getAttributeNS(nsValue, attrNamePrefixed) || "";
              }
              // TODO: Optimization, avoid using replace everytime
              const attrValue = nextProps[propName].replace(
                "$ORIGINAL",
                this.originalValues[propName]
              );
              // https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course
              elem.setAttributeNS(nsValue, attrNamePrefixed, attrValue);
              // Set inner text
              if (
                typeof nextProps.children === "string" &&
                nextProps.children.trim().length
              ) {
                elem.textContent = nextProps.children;
              }
            }
          }
        }
      }
    }
  }

  render() {
    return (
      <SVGContext.Consumer>
        {obj => {
          const { path, svg, svgCount } = obj;
          if (this.svgCount && this.svgCount !== svgCount) {
            // The svg was injected again
            // this happens when the path changed
            // ( when svgCount changes the new svg was injected )
            this.onSvgUpdated();
          } else {
            this.svgRef = svg;
            this.path = path;
            this.svgCount = svgCount;
          }
        }}
      </SVGContext.Consumer>
    );
  }
}

SvgProxy.propTypes = {
  selector: PropTypes.string.isRequired,
  onElementSelected: PropTypes.func
};

SvgProxy.defaultProps = {
  onElementSelected: () => {}
};
