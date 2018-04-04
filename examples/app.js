import ReactDOM from 'react-dom';
import React from 'react';
import Basic from './basic';
import Text from './text';
import Robot1 from './robot1';

console.log(Text);

ReactDOM.render(
  <React.Fragment>
    <Robot1 />
  </React.Fragment>,
  document.querySelector('#root')
);
