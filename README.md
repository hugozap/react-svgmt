

# react-svgmt

react-svgmt (SVG Management Tools for React)

Previously known as [react-samy-svg](https://github.com/hugozap/react-samy-svg)

### Installation

```
npm install react-svgmt

```

[Api](https://hugozap.github.io/react-svgmt/#api)

### Usage

Import the `SvgLoader` and `SvgProxy` elements

```js
import { SvgLoader, SvgProxy } from 'react-svgmt';
```

Example: Create a list CSS selectors and update each one
[CodeSandbox demo](https://codesandbox.io/s/react-svgmt-nth-child-rh48e)

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


#### Credits

Author:

 - [Hugo Zapata](https://www.hugozap.com)

Special thanks (for contributing to the first version of this library) to:

 - [https://github.com/lifeiscontent](https://github.com/lifeiscontent)
 - [https://github.com/tokyoincode](https://github.com/tokyoincode)


The ajax loading bits are based on:

- [https://github.com/iconic/SVGInjector](https://github.com/iconic/SVGInjector)
- [https://github.com/atomic-app/react-svg](https://github.com/atomic-app/react-svg)
