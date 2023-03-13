module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0);var i=((r=o)&&r.__esModule?r:{default:r}).default.createContext(null);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SvgLoader=t.SvgProxy=void 0;var r=i(n(4)),o=i(n(8));function i(e){return e&&e.__esModule?e:{default:e}}t.SvgProxy=o.default,t.SvgLoader=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(0)),a=s(n(1)),l=s(n(5)),u=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n.mounted=!1,n.state={svg:null,svgCount:0},null==i.default.Fragment)throw new Error("This version of React doesn't support Fragments, please update it");return n.onSVGReady=n.onSVGReady.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onSVGReady",value:function(e){var t=this;setTimeout((function(){t.mounted&&(t.setState(r({},t.state,{svg:e,svgCount:t.state.svgCount+1})),t.props.onSVGReady(e))}),0)}},{key:"render",value:function(){var e=this.props,t=e.path,n=(e.onSVGReady,e.children,e.svgXML),o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["path","onSVGReady","children","svgXML"]),a=null!=this.state.svg?this.props.children:null;return i.default.createElement(i.default.Fragment,null,i.default.createElement(l.default,r({path:t,callback:this.onSVGReady,svgXML:n},o)),i.default.createElement(u.default.Provider,{value:{path:t,svgCount:this.state.svgCount,svg:this.state.svg}},a))}}]),t}(i.default.Component);t.default=c,c.propTypes={path:a.default.string,svgXML:a.default.string,onSVGReady:a.default.func,style:a.default.object,children:a.default.any},c.defaultProps={path:null,svgXML:null,onSVGReady:function(){},style:null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(1)),a=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var s="undefined"!=typeof window?n(6):void 0,c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.refCallback=e.refCallback.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){this.props.path===e.path&&this.props.svgXML===e.svgXML||(this.container&&(this.container.innerHTML=""),this.renderSVG(this.props))}},{key:"refCallback",value:function(e){e&&(this.container=e,this.renderSVG())}},{key:"renderSVG",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=this.container,r=t.callback,o=(t.path,t.svgXML),i=(t.className,u(t,["callback","path","svgXML","className"]));s(n,{each:function(t){if(t)throw new Error(t);r(e.container)},svgXML:o},(function(){n&&i&&Object.keys(i).reduce((function(e,t){return"style"!==t&&e.setAttribute(t,i[t]),n}),n)}))}},{key:"render",value:function(){var e=this.props,t=(e.callback,e.path,e.svgXML,u(e,["callback","path","svgXML"]));return a.default.createElement("svg",r({ref:this.refCallback,"data-src":this.props.path},t))}}]),t}(a.default.Component);t.default=c,c.defaultProps={callback:function(){},path:null,svgXML:null},c.propTypes={callback:i.default.func,path:i.default.string,svgXML:i.default.string}},function(e,t,n){"use strict";(function(e){var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
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
!function(i,a){var l="file:"===i.location.protocol;a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");var u=Array.prototype.forEach||function(e,t){if(null==this||"function"!=typeof e)throw new TypeError;var n,r=this.length>>>0;for(n=0;n<r;++n)n in this&&e.call(t,this[n],n,this)},s={},c=0,f=[],p=[],d=function(e){return e.cloneNode(!0)},v=function(e,t){p[e]=p[e]||[],p[e].push(t)},h=function(e,t){if(void 0!==s[e])s[e]instanceof SVGSVGElement?t(d(s[e])):v(e,t);else{if(!i.XMLHttpRequest)return t("Browser does not support XMLHttpRequest"),!1;s[e]={},v(e,t);var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){if(404===n.status||null===n.responseXML)return t("Unable to load SVG file: "+e),l&&t("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),t(),!1;if(!(200===n.status||l&&0===n.status))return t("There was a problem injecting the SVG: "+n.status+" "+n.statusText),!1;if(n.responseXML instanceof Document)s[e]=n.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var r;try{r=(new DOMParser).parseFromString(n.responseText,"text/xml")}catch(e){r=void 0}if(!r||r.getElementsByTagName("parsererror").length)return t("Unable to parse SVG file: "+e),!1;s[e]=r.documentElement}!function(e){for(var t=0,n=p[e].length;t<n;t++)!function(t){setTimeout((function(){p[e][t](d(s[e]))}),0)}(t)}(e)}},n.open("GET",e),n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()}},y=function(e,t){if(void 0===t||"string"==typeof t)return!1;var n=e.getAttribute("id");n&&t.setAttribute("id",n);var r=e.getAttribute("title");r&&t.setAttribute("title",r);var o=[].concat(t.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");t.setAttribute("class",function(e){for(var t={},n=(e=e.split(" ")).length,r=[];n--;)t.hasOwnProperty(e[n])||(t[e[n]]=1,r.unshift(e[n]));return r.join(" ")}(o));var i=e.getAttribute("style");i&&t.setAttribute("style",i);var a=[].filter.call(e.attributes,(function(e){return/^data-\w[\w\-]*$/.test(e.name)}));u.call(a,(function(e){e.name&&e.value&&t.setAttribute(e.name,e.value)}));var l,s,p,d,v,h={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(h).forEach((function(e){l=e,p=h[e];for(var n=0,r=(s=t.querySelectorAll("defs "+l+"[id]")).length;n<r;n++){var o;d=s[n].id,v=d+"-"+c,u.call(p,(function(e){for(var n=0,r=(o=t.querySelectorAll("["+e+'*="'+d+'"]')).length;n<r;n++)o[n].setAttribute(e,"url(#"+v+")")})),s[n].id=v}})),t.removeAttribute("xmlns:a");var y=t.querySelectorAll("style");if(u.call(y,(function(e){e.textContent+=""})),b(e,t),t.hasAttributes())for(var g=t.attributes,m=g.length-1;m>=0;m--)g[m].name+"->"+g[m].value,e.setAttribute(g[m].name,g[m].value);delete f[f.indexOf(e)],e=null,c++},b=function(e,t){if(e.innerHTML=t.innerHTML||"",!e.innerHTML){var n=a.createElement("div"),r="<svg>"+function(e){var t=new XMLSerializer;return Array.prototype.slice.call(e.childNodes).map((function(e){return t.serializeToString(e)})).join("")}(t)+"</svg>";n.innerHTML=""+r,e.textContent="",Array.prototype.slice.call(n.childNodes[0].childNodes).forEach((function(t){e.appendChild(t)}))}},g=function(e,t,n,r){if(n){var o;try{o=(new DOMParser).parseFromString(n,"text/xml")}catch(e){o=void 0}if(!o||o.getElementsByTagName("parsererror").length)return r("Unable to parse SVG file: "+o.getElementsByTagName("parsererror")[0].innerHTML),!1;y(e,o.documentElement),r()}else{var i=e.getAttribute("data-src")||e.getAttribute("src");if(e.setAttribute("src",""),-1!==f.indexOf(e))return;f.push(e),h(i,(function(t){y(e,t),r()}))}},m=function(e,t,n){(t=t||{}).pngFallback;var r=t.each,o=t.svgXML;if(void 0!==e.length){var i=0;u.call(e,(function(t){g(t,0,o,(function(){r&&"function"==typeof r&&r(),n&&e.length===++i&&n(i)}))}))}else e?g(e,0,o,(function(){r&&"function"==typeof r&&r(),n&&n(1),e=null})):n&&n(0)};"object"===o(e)&&"object"===o(e.exports)?e.exports=t=m:void 0===(r=function(){return m}.call(t,n,t,e))||(e.exports=r)}(window,document)}).call(this,n(7)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0)),i=l(n(1)),a=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}var u=/(\w+)_(\S+)/,s={xlink:"http://www.w3.org/1999/xlink"},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.elemRefs=[],n.svgRef=null,n.path=null,n.originalValues={},n.onSvgUpdated=n.onSvgUpdated.bind(n),n.updateSvgElements=n.updateSvgElements.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.updateSvgElements(this.props)}},{key:"componentDidUpdate",value:function(e){this.props.selector!==e.selector&&(this.elemRefs=[]),this.updateSvgElements(this.props)}},{key:"onSvgUpdated",value:function(){this.updateSvgElements(this.props,!0)}},{key:"updateSvgElements",value:function(e,t){var n=this.svgRef;if(n&&(0===this.elemRefs.length||t)){var r=[].slice.apply(n.querySelectorAll(e.selector));0===r.length&&-1!==["svg","root"].indexOf(e.selector)&&r.push(n),e.onElementSelected&&r.length&&e.onElementSelected(1===r.length?r[0]:r),this.elemRefs=r}if(this.elemRefs)for(var o=Object.keys(e),i=0;i<o.length;i+=1){var a=o[i];if(!(-1!==["selector","onElementSelected"].indexOf(a))){var l=null,c=null,f=null,p=u.exec(a);p&&p[1]?(l=p[1],c=s[l],f=l+":"+p[2]):f=a;for(var d=0;d<this.elemRefs.length;d+=1){var v=this.elemRefs[d];if("function"==typeof e[a])v[a.toLowerCase()]=e[a];else{if("string"!=typeof e[a])return;null==this.originalValues[a]&&(this.originalValues[a]=v.getAttributeNS(c,f)||"");var h=e[a].replace("$ORIGINAL",this.originalValues[a]);v.setAttributeNS(c,f,h),"string"==typeof e.children&&e.children.trim().length&&(v.textContent=e.children)}}}}}},{key:"render",value:function(){var e=this;return o.default.createElement(a.default.Consumer,null,(function(t){var n=t.path,r=t.svg,o=t.svgCount;e.svgCount&&e.svgCount!==o?e.onSvgUpdated():(e.svgRef=r,e.path=n,e.svgCount=o)}))}}]),t}(o.default.Component);t.default=c,c.propTypes={selector:i.default.string.isRequired,onElementSelected:i.default.func},c.defaultProps={onElementSelected:function(){}}}]);