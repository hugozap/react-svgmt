---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---


![mit](assets/mit.svg)
<a href="https://github.com/hugozap/react-svgmt"><img src="assets/GitHub-Mark-32px.png"/></a>

## Installation

```
npm install react-svgmt

```

## Usage

Import the `SvgLoader` and `SvgProxy` elements

```js
import { SvgLoader, SvgProxy } from 'react-svgmt';
```

### Load the SVG file

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

## Api

### ```<SvgLoader/>```

| Name     | Type                 | Description    
|------------|-------------------|---------------------|
| path       | (string)          | the URL of the svg file (optional)|
| svgXML     | (string)          | contents of the svg file (optional) |
| onSVGReady | function(svgnode) | function called when the SVG element has been loaded. The svg DOM node is passed as parameter |

### ```<SvgProxy/>

| Name              | Type                | Description               
|-------------------|---------------------|-------------|
| selector          | string              | CSS selector for the element(s)|
| onElementSelected | function( svgnode ) | callback that receives the SVG DOM element (or list if more than one) matched by the selector. Useful to get the reference to the elements and manually update them.  |



 
