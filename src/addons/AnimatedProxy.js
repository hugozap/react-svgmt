import React, { Component } from "react";
import PropTypes from 'prop-types';
import {SvgProxy} from '../';
import {Motion, spring} from 'react-motion';

function valuesToString(obj) {
    const obj2 = {};
    Object.keys(obj).forEach((key)=>{
        obj2[key] = obj[key].toString();
    })
    return obj2;
}

/**
 * Animates an attribute using react-move
 */
const AnimatedProxy = (props) =>{
    const animateToValues = {}
    Object.keys(props.targetValues).forEach((key)=>{
        animateToValues[key] = spring(props.targetValues[key])
    })
    return (
        <Motion defaultStyle={props.startValues} style={animateToValues}>
            {value =>  <SvgProxy selector={props.selector} {...valuesToString(value)} />}
        </Motion>
    );
}




AnimatedProxy.propTypes = {
    selector: PropTypes.string.isRequired,
    startValues: PropTypes.object.isRequired,
    targetValues: PropTypes.object.isRequired
}
export default AnimatedProxy;
