import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Samy, SvgProxy } from "../src/index";
import svgcontents from "raw-loader!./1.svg";
import textsvg from "raw-loader!./text.svg";

/* Add different use cases. Assertions will be made from 
   the test files and run with cypress */
class App extends Component {
  
  state = {
    svgContent: svgcontents
  }

  changesvgXML() {
    //change the svg content for test
    const newSvg = this.state.svgContent.replace('#4990E2', '#000')
    this.setState({...this.state, svgContent: newSvg});
  }

  render() {

    return (
      <div>
        <h1>
          {" "}
          Cypress tests make assertions against this page rendered elements.
        </h1>
        <p> Basic ajax loading</p>
        <Samy id="basic" path="1.svg" />

        <p> Update fill property to red</p>
        <Samy id="basic-update" path="1.svg">
          <SvgProxy selector="#Star" fill="red" />
        </Samy>

        <p> Pass style prop with custom width and border</p>

        <Samy
          id="use-style-prop"
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
          path="1.svg"
        >
          <SvgProxy selector="#Star" fill="red" />
        </Samy>

        <p> Pass null as path</p>

        <Samy
          id="null-path"
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
          path={null}
        >
          <SvgProxy selector="#Star" fill="red" />
        </Samy>

        <p> Avoid ajax request, use svgXML prop to set svg contents </p>
        <Samy
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="#Star" fill="red" />
        </Samy>

        <p> Using style prop for proxy (change color to red)</p>
        <Samy
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="#Star" style={{ fill: "red" }} />
        </Samy>

        <p> Replacing text content to "Hello SVG"</p>
        <Samy
          id="change-text"
          svgXML={textsvg}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="text#label tspan" stroke="black">
            Hello SVG
          </SvgProxy>
        </Samy>

        <p>Using onElementSelected to update the element</p>
        <Samy
          id="onElementSelectedTest"
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="polygon#Star" fill="red" />
        </Samy>

        <p>Updating svgXML prop updates svg contents</p>
        <button id="btnChangeSVG" onClick={this.changesvgXML.bind(this)}> Change svgXML </button>
        <Samy
          id="updatesvgxmlprop"
          svgXML={this.state.svgContent}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
        </Samy>

        
        <p>Append content without overwriting attribute using $CURRENT token</p>
        <Samy
          id="keepcurrentattributevalue"
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="g#Page-1" transform="$ORIGINAL translate(10,10)" />
        </Samy>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
