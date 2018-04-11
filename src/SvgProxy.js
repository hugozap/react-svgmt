import React from 'react';
import PropTypes from 'prop-types';

/*
 * SvgProxy works as a virtual svg node.
 * @selector: The css selector of the element
 * @onElementSelected: callback in case the svg node is needed
 * @children : string supported (for text elements
 */
export default class SvgProxy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elemRefs: [],
    };

    this.originalValues = {};
  }

  componentDidMount() {
    /* 
     Note: The parent component <Samy>
     only renders children when the svg has been loaded
     so we know we have it in context
    */
    this.updateSvgElements(this.props, this.context);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // If a prop has changed then update the element
    this.updateSvgElements(nextProps, nextContext);
  }

  updateSvgElements(nextProps, nextContext) {
    let { elemRefs } = this.state;

    if (nextContext.svg && elemRefs.length === 0) {
      // We don't have the svg element reference.

      const nodes = Array.from(
        nextContext.svg.querySelectorAll(this.props.selector)
      );
      if (nodes.length === 0 && ['svg', 'root'].includes(this.props.selector)) {
        // If the selector equls 'svg' or 'root' use the svg node
        nodes.push(nextContext.svg);
      }
      // Call the onElementSelected callback with the element (or array)
      if (this.props.onElementSelected && nodes.length) {
        this.props.onElementSelected(nodes.length === 1 ? nodes[0] : nodes);
      }

      elemRefs = nodes;
      this.setState({ elemRefs: nodes });
    }

    if (elemRefs) {
      const propkeys = Object.keys(nextProps);
      for (let i = 0; i < propkeys.length; i += 1) {
        const propName = propkeys[i];
        // Ignore component props
        const ownprop = ['selector', 'onElementSelected'].includes(propName);
        if (!ownprop) {
          // Apply attributes to node
          for (let elemix = 0; elemix < elemRefs.length; elemix += 1) {
            const elem = elemRefs[elemix];
            if (typeof nextProps[propName] === 'function') {
              elem[propName.toLowerCase()] = nextProps[propName];
            } else {
              // Discard non string props
              // TODO: Support style conversion
              if (typeof nextProps[propName] !== 'string') {
                return;
              }
              // Save originalValue
              if (this.originalValues[propName] == null) {
                this.originalValues[propName] =
                  elem.getAttributeNS(null, propName) || '';
              }
              // TODO: Optimization, avoid using replace everytime
              const attrValue = nextProps[propName].replace(
                '$ORIGINAL',
                this.originalValues[propName]
              );
              // https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course
              elem.setAttributeNS(null, propName, attrValue);
              // Set inner text
              if (
                typeof nextProps.children === 'string' &&
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
    return null;
  }
}

SvgProxy.propTypes = {
  selector: PropTypes.string.isRequired,
  onElementSelected: PropTypes.func,
};

SvgProxy.contextTypes = {
  svg: PropTypes.object,
};

SvgProxy.defaultProps = {
  onElementSelected: () => {},
};
