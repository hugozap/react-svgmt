
Import the `SvgLoader` and `SvgProxy` elements

```js
import { SvgLoader, SvgProxy } from 'react-svgmt';
```

### Loading the SVG file

There are two options for loading the SVG contents.

1. Loading from URL.
2. Loading from string.

### Loading the SVG from a URL:

This option is useful if you want to load the asset from a remote site. An additional network request is sent to fetch the asset.

**Important:** Only load assets you trust.

```html
<SvgLoader path="svg public url here">
  <SvgProxy selector="#Star" stroke={this.state.strokeColor} />
</SvgLoader>

```

In the previous code, the `stroke` attribute is set to the value of the `strokeColor` state field. 

### Loading the SVG contents from a string.

If you already have the SVG file contents loaded, use the `svgXML` attribute instead of `path`. 

When creating components with bundled SVG files, this is the preferred approach as it avoids the additional network request:

```html
...
<SvgLoader svgXML={svgcontents}>
  <SvgProxy selector="#Star" fill="red"/>
</SvgLoader>
```
We just updated the fill attribute of the #Start element.

Notes on SvgLoader:

- SvgLoader renders the root `<svg/>` node, props used will modify it.

### Updating element attributes with SvgProxy

The cool think about SvgProxy is that it lets you update the SVG
in a declarative way. Just add a SvgProxy child element to the SvgLoader.

```html
  <SvgProxy selector="#Star" fill="red"/>
```

Very cool. We only care about the elements we'll manipulate, so this keeps our JSX clean.

### Updating text content

If you pass any content to the SvgProxy, it will be used as the svg element text content. This is useful to update text elements like tspan or text

```html
  <SvgProxy selector="tspan"> Hello World </SvgProxy>
```


Important notes on SvgProxy:

- SvgProxy elements can only be declared inside SvgLoader elements
- **Any property set in the SvgProxy element will be passed to the svg child node(s)**.
- Multiple elements can be updated if the selector prop matches them.
- SvgProxy elements transfer their props (as is) to the underlying DOM element (not React elements) so props like `style` are expected to be a string in this context. (This only applies to SvgProxy elements, not to parent SvgLoader which behave like normal React components)