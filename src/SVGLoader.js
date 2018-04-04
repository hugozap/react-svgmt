import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "./react-svg2";

function noop() {

}

const SVGLoader = (props)=> {


    const { path, onSVGReady, svgXML, ...rest } = props;
    return (
      <ReactSVG
        path={path}
        callback={onSVGReady || noop}
        svgXML={svgXML}
        {...rest}
      />
    );
}


SVGLoader.propTypes = {
  path: PropTypes.string,
  onSVGReady: PropTypes.func,
  svgXML: PropTypes.string
};

SVGLoader.defaultProps = {
  path:null,
  onSVGReady: noop,
  svgXML: null
};

export default SVGLoader;
