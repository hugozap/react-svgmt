import * as React from "react";

export interface SvgLoaderProps {
    path?: string;
    svgXML?: string;
    onSVGReady?: (container:SVGElement) => void;
    style?: React.CSSProperties;
    children?:any;
}


declare class SvgLoader extends React.Component<SvgLoaderProps, any> {}

export interface SvgProxyProps {
    selector: string;
    onElementSelected? : (elem: SVGElement) => void;
}

declare class SvgProxy extends React.Component<SvgProxyProps, any> {}


export interface TransformShape {
    x?: number;
    y?: number;
    angle?: number;
    rotateX? :number;
    rotateY? : number;
}
export interface TransformMotionProps {
    start: TransformShape;
    target: TransformShape;
    selector: string;
}

declare class TransformMotion extends React.Component<TransformMotionProps, any> {}


export interface AttributeMotionProps {
    start: any;
    target: any;
    selector: string;
}

declare class AttributeMotion extends React.Component<TransformMotionProps, any> {}
