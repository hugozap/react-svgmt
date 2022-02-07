# Changelog

## [1.2.0]

- Update React and ReactDOM dependency to v17.0.0

## [1.1.9]

Removed test that only allowed loading .svg files (So all url's work now)

## [1.1.3]

Added 2 new components to facilitate transform animation:

- TransformMotion
- Attribute Motion

```
<TransformMotion
            selector="#Group"
            target={{
              x: target.x,
              y: target.y,
              angle: target.angle,
              rotateX: 183,
              rotateY: 177
            }}
          />
          <AttributeMotion
            selector="#Group"
            start={{ opacity: 0 }}
            target={{ opacity: opacity }}
          />
```

## [1.1.1]

- Fixed issue: When path changes, proxy updates are not applied correctly and onElementSelected callback is not called

## [1.1.0]

- Updated to new Context Api
- Updated react dep to ^16.3.0

## [1.0.1]

Started work from react-samy-svg current master branch