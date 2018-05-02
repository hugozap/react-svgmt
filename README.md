

# react-svgmt  [![CircleCI](https://circleci.com/gh/hugozap/react-svgmt.svg?style=svg)](https://circleci.com/gh/hugozap/react-svgmt)

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

 - [https://www.hugozap.com](Hugo Zapata)

Special thanks (for contributing to the first version of this library) to:

 - [https://github.com/lifeiscontent](https://github.com/lifeiscontent)
 - [https://github.com/tokyoincode](https://github.com/tokyoincode)


The ajax loading bits are based on:

- [https://github.com/iconic/SVGInjector](https://github.com/iconic/SVGInjector)
- [https://github.com/atomic-app/react-svg](https://github.com/atomic-app/react-svg)