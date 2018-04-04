# Changelog

## [3.0.7]

- Fixed bug when setting text content with SvgProxy children
- eslint setup 

## [3.0.6]

- Support for $ORIGINAL token in SvgProxy values to keep the original attribute value.

## [3.0.4]

- allows update to svgXML

## [3.0.2] - 2018-01-16

- Text content can be set by adding a child to SvgProxy
- Only render SvgProxy children when the svg element has been updated.
- update Samy state with svg reference after component has mounted (added setTimeout(..,0))
-  

## [3.0.0] - 2018-01-16

- Added svgXML prop to load the svg contents from string (no ajax load)
- Docs updated
- Tests switched to cypress.io


## [2.1.0] - 2017-12-19

- Removes wrapper div. Uses React fragments.
- Updated react-svg dependency.

## [2.0.2] - 2017-12-03

- Support for react naming convention for events e.g onClick (previously only onclick worked).
- Cleaning

## [2.0.1] - 2017-11-27

- Fix #7 (old references to 'select' attribute)

## [2.0.0] - 2017-11-26

- Api Breaking changes
  - Renamed "select" attribute to "selector"
  - Renamed "Proxy" to "SvgProxy"

## [1.0.11] - 2017-11-25

- Fix react 16 (using prop-types)
- Simplified build
- Fixed example dependency (react-move)