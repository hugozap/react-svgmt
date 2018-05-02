
### ```<SvgLoader/>```

| Name     | Type                 | Description    
|------------|-------------------|---------------------|
| path       | (string)          | the URL of the svg file (optional)|
| svgXML     | (string)          | contents of the svg file (optional) |
| onSVGReady | function(svgnode) | function called when the SVG element has been loaded. The svg DOM node is passed as parameter |

### ```<SvgProxy/>```

| Name              | Type                | Description               
|-------------------|---------------------|-------------|
| selector          | string              | CSS selector for the element(s)|
| onElementSelected | function ( svgnode ) | callback that receives the SVG DOM element (or list if more than one) matched by the selector.
 Useful to get the reference to the elements and manually update them.  |

#### Notes:

- Updating namespaced attributes like image xlink:href

This is supported by using the following syntax:

```
<SvgProxy selector="#myImage" xlink_href="some url"/>
```


- SvgProxy children:

The only supported child type is string and is used to update
text nodes like ```tspan```. No other uses are currently supported.