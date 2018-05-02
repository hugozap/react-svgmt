module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SVGContext = _react2.default.createContext(null);
exports.default = SVGContext;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgLoader = exports.SvgProxy = undefined;

var _svgLoader = __webpack_require__(4);

var _svgLoader2 = _interopRequireDefault(_svgLoader);

var _svgProxy = __webpack_require__(8);

var _svgProxy2 = _interopRequireDefault(_svgProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SvgProxy = _svgProxy2.default;
exports.SvgLoader = _svgLoader2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSvg = __webpack_require__(5);

var _reactSvg2 = _interopRequireDefault(_reactSvg);

var _svgContext = __webpack_require__(2);

var _svgContext2 = _interopRequireDefault(_svgContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var SvgLoader = function (_React$Component) {
  _inherits(SvgLoader, _React$Component);

  function SvgLoader(props) {
    _classCallCheck(this, SvgLoader);

    var _this = _possibleConstructorReturn(this, (SvgLoader.__proto__ || Object.getPrototypeOf(SvgLoader)).call(this, props));

    _this.mounted = false;
    _this.state = {
      svg: null,
      svgCount: 0 // used to re apply updates when path change
    };

    if (_react2.default.Fragment == null) {
      throw new Error("This version of React doesn't support Fragments, please update it");
    }

    _this.onSVGReady = _this.onSVGReady.bind(_this);
    return _this;
  }

  _createClass(SvgLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "onSVGReady",
    value: function onSVGReady(svgNode) {
      var _this2 = this;

      // Run after component has mounted
      setTimeout(function () {
        if (_this2.mounted) {
          _this2.setState(_extends({}, _this2.state, {
            svg: svgNode,
            svgCount: _this2.state.svgCount + 1
          }));
          _this2.props.onSVGReady(svgNode);
        }
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          path = _props.path,
          onSVGReady = _props.onSVGReady,
          children = _props.children,
          svgXML = _props.svgXML,
          rest = _objectWithoutProperties(_props, ["path", "onSVGReady", "children", "svgXML"]);

      var renderProxies = this.state.svg != null;
      var proxies = renderProxies ? this.props.children : null;
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_reactSvg2.default, _extends({
          path: path,
          callback: this.onSVGReady,
          svgXML: svgXML
        }, rest)),
        _react2.default.createElement(
          _svgContext2.default.Provider,
          {
            value: { path: path, svgCount: this.state.svgCount, svg: this.state.svg }
          },
          proxies
        )
      );
    }
  }]);

  return SvgLoader;
}(_react2.default.Component);

exports.default = SvgLoader;


SvgLoader.propTypes = {
  path: _propTypes2.default.string,
  svgXML: _propTypes2.default.string,
  onSVGReady: _propTypes2.default.func,
  style: _propTypes2.default.object, // eslint-disable-line
  children: _propTypes2.default.any // eslint-disable-line
};

SvgLoader.defaultProps = {
  path: null,
  svgXML: null,
  onSVGReady: noop,
  style: null
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Adapted from the react-svg module source code;
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


// See: https://github.com/webpack/react-starter/issues/37
var isBrowser = typeof window !== 'undefined';
var SVGInjector = isBrowser ? __webpack_require__(6) : undefined;

var ReactSVG = function (_React$Component) {
  _inherits(ReactSVG, _React$Component);

  function ReactSVG() {
    _classCallCheck(this, ReactSVG);

    var _this = _possibleConstructorReturn(this, (ReactSVG.__proto__ || Object.getPrototypeOf(ReactSVG)).call(this));

    _this.refCallback = _this.refCallback.bind(_this);
    return _this;
  }

  _createClass(ReactSVG, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.path !== prevProps.path || this.props.svgXML !== prevProps.svgXML) {
        if (this.container) {
          // destroy children
          this.container.innerHTML = '';
        }
        // the svg src attribute is already updated with the new path
        // this will be used by svg injector to fetch the new svg
        this.renderSVG(this.props);
      }
    }
  }, {
    key: 'refCallback',
    value: function refCallback(container) {
      if (!container) {
        return;
      }

      this.container = container;
      this.renderSVG();
    }
  }, {
    key: 'renderSVG',
    value: function renderSVG() {
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var svgNode = this.container;

      var callback = props.callback,
          path = props.path,
          svgXML = props.svgXML,
          className = props.className,
          htmlProps = _objectWithoutProperties(props, ['callback', 'path', 'svgXML', 'className']);

      // Update SVG element

      SVGInjector(svgNode, {
        each: function each(err) {
          if (err) {
            throw new Error(err);
          }
          // each is called when the svg was injected and is ready
          callback(_this2.container);
        },
        svgXML: svgXML
      }, function () {
        // SVGInjector will override the SVG attributes set by react props
        // Re apply them (except the special `style` prop)
        // by props. So we need to re apply them.
        if (svgNode && htmlProps) {
          Object.keys(htmlProps).reduce(function (svgNode_, key) {
            if (key !== 'style') {
              svgNode_.setAttribute(key, htmlProps[key]);
            }
            return svgNode;
          }, svgNode);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          callback = _props.callback,
          path = _props.path,
          svgXML = _props.svgXML,
          props = _objectWithoutProperties(_props, ['callback', 'path', 'svgXML']);

      return _react2.default.createElement('svg', _extends({ ref: this.refCallback, 'data-src': this.props.path }, props));
    }
  }]);

  return ReactSVG;
}(_react2.default.Component);

exports.default = ReactSVG;


ReactSVG.defaultProps = {
  callback: function callback() {},
  path: null,
  svgXML: null
};

ReactSVG.propTypes = {
  callback: _propTypes2.default.func,
  path: _propTypes2.default.string,
  svgXML: _propTypes2.default.string
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
/**
 * Changes:
 * - Don't replace the node.  Justs its innerHTML
 * Adapted from:
 * Original Copyright notice ---------------------------
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 *
 */

(function (window, document) {
  'use strict';

  // Environment

  var isLocal = window.location.protocol === 'file:';
  var hasSvgSupport = document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');

  function uniqueClasses(list) {
    list = list.split(' ');

    var hash = {};
    var i = list.length;
    var out = [];

    while (i--) {
      if (!hash.hasOwnProperty(list[i])) {
        hash[list[i]] = 1;
        out.unshift(list[i]);
      }
    }

    return out.join(' ');
  }

  /**
   * cache (or polyfill for <= IE8) Array.forEach()
   * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  var forEach = Array.prototype.forEach || function (fn, scope) {
    if (this === void 0 || this === null || typeof fn !== 'function') {
      throw new TypeError();
    }

    /* jshint bitwise: false */
    var i,
        len = this.length >>> 0;
    /* jshint bitwise: true */

    for (i = 0; i < len; ++i) {
      if (i in this) {
        fn.call(scope, this[i], i, this);
      }
    }
  };

  // SVG Cache
  var svgCache = {};

  var injectCount = 0;
  var injectedElements = [];

  // Request Queue
  var requestQueue = [];

  // Script running status
  var ranScripts = {};

  var cloneSvg = function cloneSvg(sourceSvg) {
    return sourceSvg.cloneNode(true);
  };

  var queueRequest = function queueRequest(url, callback) {
    requestQueue[url] = requestQueue[url] || [];
    requestQueue[url].push(callback);
  };

  var processRequestQueue = function processRequestQueue(url) {
    for (var i = 0, len = requestQueue[url].length; i < len; i++) {
      // Make these calls async so we avoid blocking the page/renderer
      /* jshint loopfunc: true */
      (function (index) {
        setTimeout(function () {
          requestQueue[url][index](cloneSvg(svgCache[url]));
        }, 0);
      })(i);
      /* jshint loopfunc: false */
    }
  };

  var loadSvg = function loadSvg(url, callback) {
    if (svgCache[url] !== undefined) {
      if (svgCache[url] instanceof SVGSVGElement) {
        // We already have it in cache, so use it
        callback(cloneSvg(svgCache[url]));
      } else {
        // We don't have it in cache yet, but we are loading it, so queue this request
        queueRequest(url, callback);
      }
    } else {
      if (!window.XMLHttpRequest) {
        callback('Browser does not support XMLHttpRequest');
        return false;
      }

      // Seed the cache to indicate we are loading this URL already
      svgCache[url] = {};
      queueRequest(url, callback);

      var httpRequest = new XMLHttpRequest();

      httpRequest.onreadystatechange = function () {
        // readyState 4 = complete
        if (httpRequest.readyState === 4) {
          // Handle status
          if (httpRequest.status === 404 || httpRequest.responseXML === null) {
            callback('Unable to load SVG file: ' + url);

            if (isLocal) callback('Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.');

            callback();
            return false;
          }

          // 200 success from server, or 0 when using file:// protocol locally
          if (httpRequest.status === 200 || isLocal && httpRequest.status === 0) {
            /* globals Document */
            if (httpRequest.responseXML instanceof Document) {
              // Cache it
              svgCache[url] = httpRequest.responseXML.documentElement;
            } else if (DOMParser && DOMParser instanceof Function) {
              /* globals -Document */

              // IE9 doesn't create a responseXML Document object from loaded SVG,
              // and throws a "DOM Exception: HIERARCHY_REQUEST_ERR (3)" error when injected.
              //
              // So, we'll just create our own manually via the DOMParser using
              // the the raw XML responseText.
              //
              // :NOTE: IE8 and older doesn't have DOMParser, but they can't do SVG either, so...
              var xmlDoc;
              try {
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(httpRequest.responseText, 'text/xml');
              } catch (e) {
                xmlDoc = undefined;
              }

              if (!xmlDoc || xmlDoc.getElementsByTagName('parsererror').length) {
                callback('Unable to parse SVG file: ' + url);
                return false;
              } else {
                // Cache it
                svgCache[url] = xmlDoc.documentElement;
              }
            }

            // We've loaded a new asset, so process any requests waiting for it
            processRequestQueue(url);
          } else {
            callback('There was a problem injecting the SVG: ' + httpRequest.status + ' ' + httpRequest.statusText);
            return false;
          }
        }
      };

      httpRequest.open('GET', url);

      // Treat and parse the response as XML, even if the
      // server sends us a different mimetype
      if (httpRequest.overrideMimeType) httpRequest.overrideMimeType('text/xml');

      httpRequest.send();
    }
  };

  /**
   * Process the loaded svg node and copies its contents
   * to the `el` element (also an SVG node)
   * @param {Node} el Existing (empty) SVG element
   * @param {Node} svg Loaded SVG element
   */
  var processSvg = function processSvg(el, svg) {
    if (typeof svg === 'undefined' || typeof svg === 'string') {
      return false;
    }

    var imgId = el.getAttribute('id');
    if (imgId) {
      svg.setAttribute('id', imgId);
    }

    var imgTitle = el.getAttribute('title');
    if (imgTitle) {
      svg.setAttribute('title', imgTitle);
    }

    // Concat the SVG classes + 'injected-svg' + the img classes
    var classMerge = [].concat(svg.getAttribute('class') || [], 'injected-svg', el.getAttribute('class') || []).join(' ');
    svg.setAttribute('class', uniqueClasses(classMerge));

    var imgStyle = el.getAttribute('style');
    if (imgStyle) {
      svg.setAttribute('style', imgStyle);
    }

    // Copy all the data elements to the svg
    var imgData = [].filter.call(el.attributes, function (at) {
      return (/^data-\w[\w\-]*$/.test(at.name)
      );
    });
    forEach.call(imgData, function (dataAttr) {
      if (dataAttr.name && dataAttr.value) {
        svg.setAttribute(dataAttr.name, dataAttr.value);
      }
    });

    // Make sure any internally referenced clipPath ids and their
    // clip-path references are unique.
    //
    // This addresses the issue of having multiple instances of the
    // same SVG on a page and only the first clipPath id is referenced.
    //
    // Browsers often shortcut the SVG Spec and don't use clipPaths
    // contained in parent elements that are hidden, so if you hide the first
    // SVG instance on the page, then all other instances lose their clipping.
    // Reference: https://bugzilla.mozilla.org/show_bug.cgi?id=376027

    // Handle all defs elements that have iri capable attributes as defined by w3c: http://www.w3.org/TR/SVG/linking.html#processingIRI
    // Mapping IRI addressable elements to the properties that can reference them:
    var iriElementsAndProperties = {
      clipPath: ['clip-path'],
      'color-profile': ['color-profile'],
      cursor: ['cursor'],
      filter: ['filter'],
      linearGradient: ['fill', 'stroke'],
      marker: ['marker', 'marker-start', 'marker-mid', 'marker-end'],
      mask: ['mask'],
      pattern: ['fill', 'stroke'],
      radialGradient: ['fill', 'stroke']
    };

    var element, elementDefs, properties, currentId, newId;
    Object.keys(iriElementsAndProperties).forEach(function (key) {
      element = key;
      properties = iriElementsAndProperties[key];

      elementDefs = svg.querySelectorAll('defs ' + element + '[id]');
      for (var i = 0, elementsLen = elementDefs.length; i < elementsLen; i++) {
        currentId = elementDefs[i].id;
        newId = currentId + '-' + injectCount;

        // All of the properties that can reference this element type
        var referencingElements;
        forEach.call(properties, function (property) {
          // :NOTE: using a substring match attr selector here to deal with IE "adding extra quotes in url() attrs"
          referencingElements = svg.querySelectorAll('[' + property + '*="' + currentId + '"]');
          for (var j = 0, referencingElementLen = referencingElements.length; j < referencingElementLen; j++) {
            referencingElements[j].setAttribute(property, 'url(#' + newId + ')');
          }
        });

        elementDefs[i].id = newId;
      }
    });

    // Remove any unwanted/invalid namespaces that might have been added by SVG editing tools
    svg.removeAttribute('xmlns:a');

    // :WORKAROUND:
    // IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
    // This trick will trigger IE to read and use any existing SVG <style> tags.
    //
    // Reference: https://github.com/iconic/SVGInjector/issues/23
    var styleTags = svg.querySelectorAll('style');
    forEach.call(styleTags, function (styleTag) {
      styleTag.textContent += '';
    });

    //--- Update for react-samy-svg ----//
    // Before:el.parentNode.replaceChild(svg, el);
    // To keep the element reference and avoid problems with react
    // We replace innerHTML only
    el.innerHTML = svg.innerHTML;
    //copy original svg attributes to node
    if (svg.hasAttributes()) {
      var attrs = svg.attributes;
      var output = '';
      for (var i = attrs.length - 1; i >= 0; i--) {
        output += attrs[i].name + '->' + attrs[i].value;
        el.setAttribute(attrs[i].name, attrs[i].value);
      }
    }

    // Now that we no longer need it, drop references
    // to the original element so it can be GC'd
    delete injectedElements[injectedElements.indexOf(el)];
    el = null;

    // Increment the injected count
    injectCount++;
  };

  // Inject a single element
  //@svgXML: if not null then we don't fetch the file because we alredy
  //have its contents
  var injectElement = function injectElement(el, pngFallback, svgXML, callback) {
    if (svgXML) {
      //If the svgXML is passed then we don't need to fetch the svg
      var xmlDoc;
      try {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(svgXML, 'text/xml');
      } catch (e) {
        xmlDoc = undefined;
      }

      if (!xmlDoc || xmlDoc.getElementsByTagName('parsererror').length) {
        callback('Unable to parse SVG file: ' + xmlDoc.getElementsByTagName('parsererror')[0].innerHTML);
        return false;
      } else {
        // Cache it
        //svgCache[url] = xmlDoc.documentElement;
        processSvg(el, xmlDoc.documentElement);
        callback();
      }
    } else {
      // Grab the src or data-src attribute
      var imgUrl = el.getAttribute('data-src') || el.getAttribute('src');

      // We can only inject SVG
      if (!/\.svg/i.test(imgUrl)) {
        callback('Attempted to inject a file with a non-svg extension: ' + imgUrl);
        return;
      }

      //avoid loading the asset
      el.setAttribute('src', '');
      // Make sure we aren't already in the process of injecting this element to
      // avoid a race condition if multiple injections for the same element are run.
      // :NOTE: Using indexOf() only _after_ we check for SVG support and bail,
      // so no need for IE8 indexOf() polyfill
      if (injectedElements.indexOf(el) !== -1) {
        return;
      }

      // Remember the request to inject this element, in case other injection
      // calls are also trying to replace this element before we finish
      injectedElements.push(el);

      // Load it up
      loadSvg(imgUrl, function (svg) {
        processSvg(el, svg);
        callback();
      });
    }
  };

  /**
   * SVGInjector
   *
   * Replace the given elements with their full inline SVG DOM elements.
   *
   * :NOTE: We are using get/setAttribute with SVG because the SVG DOM spec differs from HTML DOM and
   * can return other unexpected object types when trying to directly access svg properties.
   * ex: "className" returns a SVGAnimatedString with the class value found in the "baseVal" property,
   * instead of simple string like with HTML Elements.
   *
   * @param {mixes} Array of or single DOM element
   * @param {object} options
   * @param {function} callback
   * @return {object} Instance of SVGInjector
   */
  var SVGInjector = function SVGInjector(elements, options, done) {
    // Options & defaults
    options = options || {};

    // Location of fallback pngs, if desired
    var pngFallback = options.pngFallback || false;

    // Callback to run during each SVG injection, returning the SVG injected
    var eachCallback = options.each;

    var svgXML = options.svgXML;

    // Do the injection...
    if (elements.length !== undefined) {
      var elementsLoaded = 0;
      forEach.call(elements, function (element) {
        injectElement(element, pngFallback, svgXML, function () {
          if (eachCallback && typeof eachCallback === 'function') eachCallback();
          if (done && elements.length === ++elementsLoaded) done(elementsLoaded);
        });
      });
    } else {
      if (elements) {
        injectElement(elements, pngFallback, svgXML, function () {
          if (eachCallback && typeof eachCallback === 'function') eachCallback();
          if (done) done(1);
          elements = null;
        });
      } else {
        if (done) done(0);
      }
    }
  };

  /* global module, exports: true, define */
  // Node.js or CommonJS
  if (( false ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = exports = SVGInjector;
  } else if (true) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return SVGInjector;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    // Otherwise, attach to window as global
    window.SVGInjector = SVGInjector;
  }
  /* global -module, -exports, -define */
})(window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _svgContext = __webpack_require__(2);

var _svgContext2 = _interopRequireDefault(_svgContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hasNamespaceRegexp = /(\w+)_(\S+)/;
var supportedNamespaces = {
  xlink: 'http://www.w3.org/1999/xlink'

  /*
   * SvgProxy works as a virtual svg node.
   * @selector: The css selector of the element
   * @onElementSelected: callback in case the svg node is needed
   * @children : string supported (for text elements
   */
};
var SvgProxy = function (_React$Component) {
  _inherits(SvgProxy, _React$Component);

  function SvgProxy(props) {
    _classCallCheck(this, SvgProxy);

    // DOM references to the selected nodes
    var _this = _possibleConstructorReturn(this, (SvgProxy.__proto__ || Object.getPrototypeOf(SvgProxy)).call(this, props));

    _this.elemRefs = [];
    _this.svgRef = null;
    _this.path = null;
    _this.originalValues = {};
    _this.onSvgUpdated = _this.onSvgUpdated.bind(_this);
    _this.updateSvgElements = _this.updateSvgElements.bind(_this);
    return _this;
  }

  _createClass(SvgProxy, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSvgElements(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // If a prop has changed then update the element
      this.updateSvgElements(nextProps);
    }
  }, {
    key: "onSvgUpdated",
    value: function onSvgUpdated() {
      // force to reapply updates
      this.updateSvgElements(this.props, true);
    }
  }, {
    key: "updateSvgElements",
    value: function updateSvgElements(nextProps, force) {
      var svgRef = this.svgRef;


      if (svgRef && (this.elemRefs.length === 0 || force)) {
        // We don't have the svg element reference.

        var nodes = Array.from(svgRef.querySelectorAll(this.props.selector));
        if (nodes.length === 0 && ["svg", "root"].includes(this.props.selector)) {
          // If the selector equls 'svg' or 'root' use the svg node
          nodes.push(svgRef);
        }
        // Call the onElementSelected callback with the element (or array)
        if (this.props.onElementSelected && nodes.length) {
          this.props.onElementSelected(nodes.length === 1 ? nodes[0] : nodes);
        }

        this.elemRefs = nodes;
      }

      if (this.elemRefs) {
        var propkeys = Object.keys(nextProps);
        for (var i = 0; i < propkeys.length; i += 1) {
          var propName = propkeys[i];
          // Ignore component props
          var ownprop = ["selector", "onElementSelected"].includes(propName);
          if (!ownprop) {
            var nsPrefix = null;
            var nsValue = null;
            var attrNameWithoutPrefix = propName;
            var attrNamePrefixed = null;
            // TODO: check performance implications (for animations) of testing everytime
            var r = hasNamespaceRegexp.exec(propName);
            if (r && r[1]) {
              // eslint-disable-next-line
              nsPrefix = r[1];
              nsValue = supportedNamespaces[nsPrefix];
              // eslint-disable-next-line            
              attrNameWithoutPrefix = r[2];
              attrNamePrefixed = nsPrefix + ":" + attrNameWithoutPrefix;
            } else {
              attrNamePrefixed = propName;
            }
            // Apply attributes to node
            for (var elemix = 0; elemix < this.elemRefs.length; elemix += 1) {
              var elem = this.elemRefs[elemix];
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
                  this.originalValues[propName] = elem.getAttributeNS(nsValue, attrNamePrefixed) || "";
                }
                // TODO: Optimization, avoid using replace everytime
                var attrValue = nextProps[propName].replace("$ORIGINAL", this.originalValues[propName]);
                // https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course
                elem.setAttributeNS(nsValue, attrNamePrefixed, attrValue);
                // Set inner text
                if (typeof nextProps.children === "string" && nextProps.children.trim().length) {
                  elem.textContent = nextProps.children;
                }
              }
            }
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _svgContext2.default.Consumer,
        null,
        function (obj) {
          var path = obj.path,
              svg = obj.svg,
              svgCount = obj.svgCount;

          if (_this2.svgCount && _this2.svgCount !== svgCount) {
            // The svg was injected again
            // this happens when the path changed
            // ( when svgCount changes the new svg was injected )
            _this2.onSvgUpdated();
          } else {
            _this2.svgRef = svg;
            _this2.path = path;
            _this2.svgCount = svgCount;
          }
        }
      );
    }
  }]);

  return SvgProxy;
}(_react2.default.Component);

exports.default = SvgProxy;


SvgProxy.propTypes = {
  selector: _propTypes2.default.string.isRequired,
  onElementSelected: _propTypes2.default.func
};

SvgProxy.defaultProps = {
  onElementSelected: function onElementSelected() {}
};

/***/ })
/******/ ]);