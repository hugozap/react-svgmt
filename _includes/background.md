
There are different approaches to use SVG inside a React component, the process usually involves the following steps:

- Create SVG in Editor (Sketch, Illustrator..)
- Copy SVG contents and paste them into the React
  - Adjust content (e.g class -> className) to make it JSX compatible
- Manipulate the SVG JSX like any other element.

This works ok for small components but there are issues:

- We lose the ability to keep iterating on the SVG assets (We would have to adjust them again or just copy/paste the parts that changed into our JSX).

- Having all the SVG markup inside the JSX creates pollutes the component markup and makes it harder to understand.

The goal of this library is to overcome those issues, making it easier to work on SVG based components by:

- Keeping the .svg file independent (so it becomes trivial to update )
- Provide a way to declare SVG manipulations `the React way`. 
- Only focus on the SVG elements we want to modify.