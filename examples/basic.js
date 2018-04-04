import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Samy, SvgProxy } from '../src';

export default class basic extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      colors: ['yellow', 'red', 'black'],
      strokeColorIndex: 0,
      width: 150
    };
  }

  componentDidMount() {
    setInterval(() => {
      const nextIndex =
        (this.state.strokeColorIndex + 1) % this.state.colors.length;
      const newWidth = this.state.width === 150 ? 100 : 150;
      console.log('newWidth', newWidth)
      this.setState( { ...this.state, strokeColorIndex: nextIndex, width: newWidth }
      );
    }, 1000);
  }

  render() {
    const strokeColor = this.state.colors[this.state.strokeColorIndex];
    console.log(this.state.width);
    return (
      <Samy viewBox='0 0 400 400' className="test-class" path="1.svg" style={{ width: this.state.width + 'px', height: 'auto' }}>
        <SvgProxy selector="#Star" stroke={strokeColor} />
      </Samy>
    );
  }
}
