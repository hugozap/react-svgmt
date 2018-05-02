/* Adapted from the react-svg module source code;
  - removes <divs>
  Original LiCENSE text:
  The MIT License (MIT)

  Copyright (c) 2014 Atomic

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
import PropTypes from 'prop-types';
import React from 'react';

// See: https://github.com/webpack/react-starter/issues/37
const isBrowser = typeof window !== 'undefined';
const SVGInjector = isBrowser ? require('./svg-injector') : undefined;

export default class ReactSVG extends React.Component {
  constructor() {
    super();
    this.refCallback = this.refCallback.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.path !== prevProps.path ||
      this.props.svgXML !== prevProps.svgXML
    ) {
      if (this.container) {
        // destroy children
        this.container.innerHTML = '';
      }
      // the svg src attribute is already updated with the new path
      // this will be used by svg injector to fetch the new svg
      this.renderSVG(this.props);
    }
  }

  refCallback(container) {
    if (!container) {
      return;
    }

    this.container = container;
    this.renderSVG();
  }

  renderSVG(props = this.props) {
    const svgNode = this.container;
    const { callback, path, svgXML, className, ...htmlProps } = props;

    // Update SVG element

    SVGInjector(
      svgNode,
      {
        each: err => {
          if (err) {
            throw new Error(err);
          }
          // each is called when the svg was injected and is ready
          callback(this.container);
        },
        svgXML,
      },
      () => {
        // SVGInjector will override the SVG attributes set by react props
        // Re apply them (except the special `style` prop)
        // by props. So we need to re apply them.
        if (svgNode && htmlProps) {
          Object.keys(htmlProps).reduce((svgNode_, key) => {
            if (key !== 'style') {
              svgNode_.setAttribute(key, htmlProps[key]);
            }
            return svgNode;
          }, svgNode);
        }
      }
    );
  }

  render() {
    const { callback, path, svgXML, ...props } = this.props;
    return <svg ref={this.refCallback} data-src={this.props.path} {...props} />;
  }
}

ReactSVG.defaultProps = {
  callback: () => {},
  path: null,
  svgXML: null,
};

ReactSVG.propTypes = {
  callback: PropTypes.func,
  path: PropTypes.string,
  svgXML: PropTypes.string,
};
