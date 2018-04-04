import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animate } from 'react-move';
import { Samy, SvgProxy } from '../src';

export default class Robot1 extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      eyeScale: 1,
      bodyY: 0,
      leg1Y: 0,
      leg2Y: -20,
      headRotation: 0,
      headDirection: 1,
      steamOpacity: 0
    };
  }

  jump(prevState) {
    return { bodyY: Math.random() * 10 - 10 };
  }

  walk(prevState) {
    const length = 5;
    return {
      leg1Y: prevState.leg1Y === 0 ? -length : 0,
      leg2Y: prevState.leg2Y === -length ? 0 : -length
    };
  }

  rotateHead(prevState) {
    const max = 10;
    return {
      headDirection: -prevState.headDirection,
      headRotation: max * prevState.headDirection
    };
  }

  steam(prevState) {
    return {
      steamOpacity: prevState.steamOpacity === 0 ? 1.0 : 0
    };
  }

  blink(prevState) {
    return {
      eyeScale: prevState.eyeScale ? 0 : 1
    };
  }

  componentDidMount() {
    //Use React Move to animate the body
    setInterval(() => {
      this.setState(this.jump);
    }, 100);

    setInterval(() => {
      this.setState(this.walk);
    }, 200);

    setInterval(() => {
      this.setState(this.rotateHead);
      this.setState(this.steam);
    }, 1000);

    setInterval(() => {
      this.setState(this.blink);
    }, 900);
  }

  render() {
    return (
      <React.Fragment>
        <Samy path="./robots/gertbot.svg" style={{ width: 268, height: 406 }}>
          <Animate
            start={() => ({
              y: 0,
              leg1: 0,
              leg2: 0,
              headRotation: 0
            })}
            update={() => ({
              y: this.state.bodyY,
              leg1: this.state.leg1Y,
              leg2: -this.state.leg1Y,
              headRotation: this.state.headRotation,
              steamOpacity: this.state.steamOpacity
            })}
            duration={50}
            easing="easePolyIn" // anything from https://github.com/d3/d3-ease
          >
            {data => {
              if (data == null) {
                return null;
              }
              return (
                <React.Fragment>
                  <SvgProxy
                    selector="#core"
                    transform={`translate(0 ${data.y})`}
                  />
                  <SvgProxy
                    selector="#arm1"
                    transform={`translate(0 ${data.y * 0.5})`}
                  />
                  <SvgProxy
                    selector="#arm2"
                    transform={`translate(0 ${-data.y * 0.5})`}
                  />
                  <SvgProxy
                    selector="#leg1"
                    transform={`translate(0 ${data.leg1})`}
                  />
                  <SvgProxy
                    selector="#leg2"
                    transform={`translate(0 ${data.leg2})`}
                  />
                </React.Fragment>
              );
            }}
          </Animate>

          <Animate
            start={() => ({
              headRotation: 0,
              steamOpacity: 0
            })}
            // Update your data to whatever you want
            update={() => ({
              headRotation: this.state.headRotation,
              steamOpacity: this.state.steamOpacity
            })}
            duration={300}
            easing="cubicin"
          >
            {data => (
              <React.Fragment>
                <SvgProxy
                  selector="#head"
                  transform={`rotate(${data.headRotation} 134 176)`}
                />
                <SvgProxy
                  selector="#steam:nth-child(odd)"
                  fill-opacity={data.steamOpacity}
                />
                <SvgProxy
                  selector="#steam:nth-child(even)"
                  fill-opacity={1 - data.steamOpacity}
                />
              </React.Fragment>
            )}
          </Animate>
        </Samy>
      </React.Fragment>
    );
  }
}

const animateBody = () => {
};
