

# react-svgmt

react-svgmt (SVG Management Tools for React)

### Installation

```
npm install react-svgmt

```

[Api and Docs](https://hugozap.github.io/react-svgmt/#api)

### Usage

Import the `SvgLoader` and `SvgProxy` elements

```js
import { SvgLoader, SvgProxy } from 'react-svgmt';
```

Example: Create a list CSS selectors and update each one
[![Edit react-svgmt-nth-child](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-svgmt-nth-child-rh48e?fontsize=14)

```js
function App() {
  //We want to update only elements that match this selectors
  const selectors = ["rect:nth-child(1)", "rect:nth-child(4)"];
  return (
    <div className="App">
      <SvgLoader width="100" height="100" path="/sample1.svg">
        <SvgProxy selector="rect" fill="red" />
        {selectors.map((selector, ix) => (
          <SvgProxy key={ix} selector={selector} fill="blue" />
        ))}
      </SvgLoader>
    </div>
  );
}
```

#### Loading and manipulating and SVG

If the `path` prop is used, then the asset will be fetched from the url. 


```jsx
<SvgLoader path="svg public url here">
  <SvgProxy selector="#Star" stroke={this.state.strokeColor} />
</SvgLoader>

```

There are two ways to load an SVG file:

1) From a URL (using the `path` prop)
2) From a string with the SVG file contents (using the `svgXML` prop)

More features, API and examples see [https://hugozap.github.io/react-svgmt](https://hugozap.github.io/react-svgmt)

#### How to change the selectors and reset previous elements?

This library doesn't store previous elements state. Say you want
to update some elements fill color and then change the selector
to update another set of elements.

Don't expect the original element attributes to be reset back to their original state.
You need to add a "reset" SvgProxy so all elements attributes are reseted before
the additional SvgProxies are processed.

Check this [CodeSandbox](https://codesandbox.io/s/7w81wm0z11?file=/src/index.js:0-1182_) for an example.


#### Credits

This project is sponsored by [Diagram.codes Studio](https://studio.diagram.codes)


Author:

 - [Hugo Zapata](https://hugozap.com)

Special thanks (for contributing to the first version of this library) to:

 - [https://github.com/lifeiscontent](https://github.com/lifeiscontent)
 - [https://github.com/tokyoincode](https://github.com/tokyoincode)


The ajax loading bits are based on:

- [https://github.com/iconic/SVGInjector](https://github.com/iconic/SVGInjector)
- [https://github.com/atomic-app/react-svg](https://github.com/atomic-app/react-svg)
