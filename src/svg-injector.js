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

(function(window, document) {
  'use strict';

  // Environment
  var isLocal = window.location.protocol === 'file:';
  var hasSvgSupport = document.implementation.hasFeature(
    'http://www.w3.org/TR/SVG11/feature#BasicStructure',
    '1.1'
  );

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
  var forEach =
    Array.prototype.forEach ||
    function(fn, scope) {
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

  var cloneSvg = function(sourceSvg) {
    return sourceSvg.cloneNode(true);
  };

  var queueRequest = function(url, callback) {
    requestQueue[url] = requestQueue[url] || [];
    requestQueue[url].push(callback);
  };

  var processRequestQueue = function(url) {
    for (var i = 0, len = requestQueue[url].length; i < len; i++) {
      // Make these calls async so we avoid blocking the page/renderer
      /* jshint loopfunc: true */
      (function(index) {
        setTimeout(function() {
          requestQueue[url][index](cloneSvg(svgCache[url]));
        }, 0);
      })(i);
      /* jshint loopfunc: false */
    }
  };

  var loadSvg = function(url, callback) {
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

      httpRequest.onreadystatechange = function() {
        // readyState 4 = complete
        if (httpRequest.readyState === 4) {
          // Handle status
          if (httpRequest.status === 404 || httpRequest.responseXML === null) {
            callback('Unable to load SVG file: ' + url);

            if (isLocal)
              callback(
                'Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.'
              );

            callback();
            return false;
          }

          // 200 success from server, or 0 when using file:// protocol locally
          if (
            httpRequest.status === 200 ||
            (isLocal && httpRequest.status === 0)
          ) {
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
                xmlDoc = parser.parseFromString(
                  httpRequest.responseText,
                  'text/xml'
                );
              } catch (e) {
                xmlDoc = undefined;
              }

              if (
                !xmlDoc ||
                xmlDoc.getElementsByTagName('parsererror').length
              ) {
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
            callback(
              'There was a problem injecting the SVG: ' +
                httpRequest.status +
                ' ' +
                httpRequest.statusText
            );
            return false;
          }
        }
      };

      httpRequest.open('GET', url);

      // Treat and parse the response as XML, even if the
      // server sends us a different mimetype
      if (httpRequest.overrideMimeType)
        httpRequest.overrideMimeType('text/xml');

      httpRequest.send();
    }
  };

  /**
   * Process the loaded svg node and copies its contents
   * to the `el` element (also an SVG node)
   * @param {Node} el Existing (empty) SVG element
   * @param {Node} svg Loaded SVG element
   */
  var processSvg = function(el, svg) {
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
    var classMerge = []
      .concat(
        svg.getAttribute('class') || [],
        'injected-svg',
        el.getAttribute('class') || []
      )
      .join(' ');
    svg.setAttribute('class', uniqueClasses(classMerge));

    var imgStyle = el.getAttribute('style');
    if (imgStyle) {
      svg.setAttribute('style', imgStyle);
    }

    // Copy all the data elements to the svg
    var imgData = [].filter.call(el.attributes, function(at) {
      return /^data-\w[\w\-]*$/.test(at.name);
    });
    forEach.call(imgData, function(dataAttr) {
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
      radialGradient: ['fill', 'stroke'],
    };

    var element, elementDefs, properties, currentId, newId;
    Object.keys(iriElementsAndProperties).forEach(function(key) {
      element = key;
      properties = iriElementsAndProperties[key];

      elementDefs = svg.querySelectorAll('defs ' + element + '[id]');
      for (var i = 0, elementsLen = elementDefs.length; i < elementsLen; i++) {
        currentId = elementDefs[i].id;
        newId = currentId + '-' + injectCount;

        // All of the properties that can reference this element type
        var referencingElements;
        forEach.call(properties, function(property) {
          // :NOTE: using a substring match attr selector here to deal with IE "adding extra quotes in url() attrs"
          referencingElements = svg.querySelectorAll(
            '[' + property + '*="' + currentId + '"]'
          );
          for (
            var j = 0, referencingElementLen = referencingElements.length;
            j < referencingElementLen;
            j++
          ) {
            referencingElements[j].setAttribute(
              property,
              'url(#' + newId + ')'
            );
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
    forEach.call(styleTags, function(styleTag) {
      styleTag.textContent += '';
    });

    //--- Update for react-samy-svg ----//
    // Before:el.parentNode.replaceChild(svg, el);
    // To keep the element reference and avoid problems with react
    // We replace innerHTML only
    setSVGContent(el, svg);

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

  // innerHTML is not available on svg elements in IE
  // this is a workaround to parse it anyway
  var getSvgContent = function (svg) {
    const serializer = new XMLSerializer();
    return Array.prototype.slice.call(svg.childNodes).map(node => serializer.serializeToString(node)).join('');
  };

  // setting the innerHTML of the injected SVG
  // simply use innerHTML if possible
  // fallback to create dummy element and insert children one by one
  var setSVGContent = function (el, svg) {

    el.innerHTML = svg.innerHTML || '';

    if(!el.innerHTML){
      // Create a dummy element
      var tempElement = document.createElement('div');

      // Wrap the svg string to a svg object (string)
      var svgfragment = '<svg>' + getSvgContent(svg) + '</svg>';

      // Add all svg to the element
      tempElement.innerHTML = '' + svgfragment;

      // Clear out any existing content in the element before appending the new nodes.
      el.textContent = '';

      // Splice the childs of the SVG inside the element to the SVG at the body
      Array.prototype.slice.call(tempElement.childNodes[0].childNodes).forEach(function (element) {    el.appendChild(element)});
    }
  };

  // Inject a single element
  //@svgXML: if not null then we don't fetch the file because we alredy
  //have its contents
  var injectElement = function(el, pngFallback, svgXML, callback) {
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
        callback(
          'Unable to parse SVG file: ' +
            xmlDoc.getElementsByTagName('parsererror')[0].innerHTML
        );
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
      loadSvg(imgUrl, svg => {
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
  var SVGInjector = function(elements, options, done) {
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
      forEach.call(elements, function(element) {
        injectElement(element, pngFallback, svgXML, function() {
          if (eachCallback && typeof eachCallback === 'function')
            eachCallback();
          if (done && elements.length === ++elementsLoaded)
            done(elementsLoaded);
        });
      });
    } else {
      if (elements) {
        injectElement(elements, pngFallback, svgXML, function() {
          if (eachCallback && typeof eachCallback === 'function')
            eachCallback();
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
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = exports = SVGInjector;
  } else if (typeof define === 'function' && define.amd) {
    // AMD support
    define(function() {
      return SVGInjector;
    });
  } else if (typeof window === 'object') {
    // Otherwise, attach to window as global
    window.SVGInjector = SVGInjector;
  }
  /* global -module, -exports, -define */
})(window, document);
