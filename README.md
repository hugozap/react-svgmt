

# SamySVG :cyclone: [![CircleCI](https://circleci.com/gh/hugozap/react-samy-svg.svg?style=svg)](https://circleci.com/gh/hugozap/react-samy-svg)

Better SVG workflows with React :ok_hand:

# Background

There are different approaches to use SVG inside a React component, the process usually involves the following steps

- Create SVG in Editor (Sketch, Illustrator..)
- Copy SVG contents and paste them into the React
  - Adjust content (e.g class -> className) to make it JSX compatible
- Manipulate the SVG JSX like any other element.

This works ok for small components but there are some issues that can get annoying for bigger components:

- We lose the ability to keep iterating on the SVG assets (We would have to adjust them again or just copy/paste the parts that changed into our JSX).

- Having all the SVG markup creates a lot of noise making it harder to read the source code of our components.

The goals of this library is overcoming those issues, making it easier to work on SVG based components:

- Keeping the .svg file independent (so it becomes trivial to update )
- Provide a way to declare SVG manipulations `the React way`. 


### Installation

```
npm install react-samy-svg

```

### Usage

Import the `Samy` and `SvgProxy` elements

```js
import { Samy, SvgProxy } from 'react-samy-svg';
```

#### Loading the asset (Additional network request)

If the `path` prop is used, then the asset will be fetched from the url. 


```jsx
<Samy path="svg public url here">
  <SvgProxy selector="#Star" stroke={this.state.strokeColor} />
</Samy>;

```

In the previous code, the stroke attribute of the element with id "star" is set
to the value of the state property `strokeColor`. **Any property set in the
SvgProxy element will also be set in the svg child node**.

**Note:** Just load assets from sites you trust.

#### Bundling the svg assets with your component.

Having the svg file bundled with your component avoids the additional network request.
You can use something like the webpack raw-loader to read the .svg file contents at build time and use the `svgXML` property (instead of path) to pass the file contents to Samy.

```jsx
import svgcontents from 'raw-loader!./my-nice-graphic.svg'
...
<Samy svgXML={svgcontents} style={{width:'500px', height:'200px', border:'solid 1px'}}>
  <SvgProxy selector="#Star" fill="red"/>
</Samy>
```

In the previous snippet the svg contents are read by the webpack raw-loader into the
svgcontents variable. An internal svg element with the id "#Star" is modified to change its fill color to `red`.

#### Using SvgProxy to manipulate the SVG in a declarative way

In the previous example there's a child component of `<Samy>` called `<SvgProxy>`
In this context and Svg proxy just transfers its props to the selected SVG elements. CSS selectors are used. 

```jsx
  <SvgProxy selector="#Star" fill="red"/>
```

**Note 1:** Use any valid svg attribute and it will be applied to the selected element

**Note 2:** Multiple elements can be manipulated at once if they match the CSS selector!

**Note 3:** Keep in mind that proxies transfer additional props (as is) to the underlying DOM element (not React elements) so props like `style` are expected to be a string in this context.

If you need to rename the svg element ids, its recommended to do it from the editor (In Sketch, the layer names are used as the element id's ). This keeps the svg file as the 'source of truth'. Communication with the SVG designer is important so the internal SVG structure and ids are known. 


### Components

#### Samy

The basic syntax to load and external SVG:

```jsx
<Samy path="1.svg" />;
```

If you already bundle the file contents and don't want an additional request use :

```jsx
<Samy svgXML={Variable_With_SVGContents} />;

```

Properties:

* path: (string)the URL of the svg file (optional)
* svgXML: (string) contents of the svg file (optional)
* style: (object) style that will be forwarded to the SVG element when loaded
* onSVGReady (function): Callback called when the SVG element has been loaded.

**Note:** Additional properties (e.g width, viewBox) will be transferred to the DOM svg node

#### SvgProxy

Used to manipulate internal SVG nodes. Must be a child of a `<Samy>` element

```jsx
<SvgProxy selector="#myElementId" fill="#000" />;
```

the `selector` attribute can target multiple elements, so this is valid:

```jsx
<SvgProxy selector="#rightEye,#leftEye" fill="#000" />;
```

**Note**
Use the token $ORIGINAL to keep the original attribute value.
For example, to keep the original transform but add a translate operation:

```jsx
<SvgProxy transform="$ORIGINAL translate(0,40)" fill="#000" />;
```

(Remember than in SVG transforms are applied right to left)


**Properties:**

* selector: (string) CSS selector for the element(s)
* onElementSelected: (function(elem)) callback that receives the DOM element (or list of
  elements that this SvgProxy tracks), if multiple elements are being controlled by the proxy, a list is returned.


#### Credits

Contributors

 - [https://github.com/hugozap](https://github.com/hugozap)
 - [https://github.com/lifeiscontent](https://github.com/lifeiscontent)
 - [https://github.com/tokyoincode](https://github.com/tokyoincode)


The ajax loading bits are based on:

- [https://github.com/iconic/SVGInjector](https://github.com/iconic/SVGInjector)
- [https://github.com/atomic-app/react-svg](https://github.com/atomic-app/react-svg)