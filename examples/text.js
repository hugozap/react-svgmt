import React from 'react';
import { Samy, SvgProxy } from '../src';

export default props => {
  //Note: The selector is "#text-3 tspan"
  return (
    <Samy path="text.svg" viewBox="0 0 150 150" style={{ width: 400, height: 'auto' }}>
      <SvgProxy selector="#text-3 tspan">Text changed</SvgProxy>
    </Samy>
  );
};
