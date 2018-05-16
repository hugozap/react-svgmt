### `<SvgLoader/>`

| Name       | Type              | Description                                                                                   |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------- |
| path       | (string)          | the URL of the svg file (optional)                                                            |
| svgXML     | (string)          | contents of the svg file (optional)                                                           |
| onSVGReady | function(svgnode) | function called when the SVG element has been loaded. The svg DOM node is passed as parameter |

### `<SvgProxy/>`

| Name                                                                  | Type                 | Description                                                                                    |
| --------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| selector                                                              | string               | CSS selector for the element(s)                                                                |
| onElementSelected                                                     | function ( svgnode ) | callback that receives the SVG DOM element (or list if more than one) matched by the selector. |
| Useful to get the reference to the elements and manually update them. |

#### Notes:

* Updating namespaced attributes like image xlink:href

This is supported by using the following syntax:

```
<SvgProxy selector="#myImage" xlink_href="some url"/>
```

* SvgProxy children:

The only supported child type is string and is used to update
text nodes like `tspan`. No other uses are currently supported.

### Animation shortcuts

react-svgmt includes components to create animation based on springs.
These are wrappers over the react-motion library.

#### TransformMotion

Use this component to animate the `transform` attribute.
The original `transform` value is preserved, this is convenient
to add animation without losing the element original position.

Example: Translating and rotating

<script src="https://gist.github.com/hugozap/7e631fcc5591a684bd60ee485e408954.js"></script>

Props:

- start: Object with the shape of:

```
{
    x: number, //translate x value
    y: number, //translate y value
    angle: number, //rotate angle in degrees
    rotateX: number, //center of rotation x
    rotateY: number //center of rotation y
}
```

#### AttributeMotion

Use this component to animate any svg attribute.
Props:

* start: initial state
* target: target values
* formatValue (optional): function that returns the final string value, used if you need a different final value being passed to the svg element.

Example: Animating the opacity.

<script src="https://gist.github.com/hugozap/4ceac468f167b8aabc27db87c87c21b5.js"></script>


