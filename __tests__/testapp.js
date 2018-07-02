import React, { Component } from "react";
import ReactDOM from "react-dom";
import { SvgLoader, SvgProxy } from "../src/index";
import svgcontents from "raw-loader!./1.svg";
import textsvg from "raw-loader!./text.svg";
import { AttributeMotion } from "../src/addons/AnimatedProxy";

/* Add different use cases. Assertions will be made from 
   the test files and run with cypress */
class App extends Component {
  state = {
    svgContent: svgcontents,
    tempPath: "1.svg",
    opacity: 0,
    dynamicSelector: "#Star"
  };

  changesvgXML() {
    //change the svg content for test
    const newSvg = this.state.svgContent.replace("#4990E2", "#000");
    this.setState({ ...this.state, svgContent: newSvg });
  }

  toggleTempPath() {
    //toggle between 1.svg and 2.svg
    this.setState({
      ...this.state,
      tempPath: this.state.tempPath == "1.svg" ? "2.svg" : "1.svg"
    });
  }

  //sets the fill to green
  //using the onElementSelected callback
  //we use this to test that the callback gets executed
  //when the path changes.
  changeFillOnSelected(elem) {
    elem.setAttribute("fill", `rgb(0,255,0)`);
  }

  setOpacity() {
    this.setState({ ...this.state, opacity: 1 });
  }

  changeSelector() {
    this.setState({ ...this.state, dynamicSelector: "#Star2" });
  }

  onElementSelectedDynamic (val) {

    console.log('onElementSelected triggered'+val);
  }
  
  render() {
    return (
      <div>
        <h1>
          {" "}
          Cypress tests make assertions against this page rendered elements.
        </h1>
        <p> Basic ajax loading</p>
        <SvgLoader id="basic" path="1.svg" />

        <p> Update fill property to red</p>
        <SvgLoader id="basic-update" path="1.svg">
          <SvgProxy selector="#Star" fill="red" />
        </SvgLoader>

        <p> Pass style prop with custom width and border</p>

        <SvgLoader
          id="use-style-prop"
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
          path="1.svg"
        >
          <SvgProxy selector="#Star" fill="red" />
        </SvgLoader>

        <p> Pass null as path</p>

        <SvgLoader
          id="null-path"
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
          path={null}
        >
          <SvgProxy selector="#Star" fill="red" />
        </SvgLoader>

        <p> Avoid ajax request, use svgXML prop to set svg contents </p>
        <SvgLoader
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="#Star" fill="red" />
        </SvgLoader>

        <p> Replacing text content to "Hello SVG"</p>
        <SvgLoader
          id="change-text"
          svgXML={textsvg}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="text#label tspan" stroke="black">
            Hello SVG
          </SvgProxy>
        </SvgLoader>

        <p>Using onElementSelected to update the element</p>
        <SvgLoader
          id="onElementSelectedTest"
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy selector="polygon#Star" fill="red" />
        </SvgLoader>

        <p>Updating svgXML prop updates svg contents</p>
        <button id="btnChangeSVG" onClick={this.changesvgXML.bind(this)}>
          {" "}
          Change svgXML{" "}
        </button>
        <SvgLoader
          id="updatesvgxmlprop"
          svgXML={this.state.svgContent}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        />

        <p>
          Append content without overwriting attribute using $ORIGINAL token
        </p>
        <SvgLoader
          id="keepcurrentattributevalue"
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
        >
          <SvgProxy
            selector="g#Page-1"
            transform="$ORIGINAL translate(10,10)"
          />
        </SvgLoader>

        <p>
          {" "}
          Change path applies proxies correctly (star should be green after
          clicking the change path button){" "}
        </p>
        <SvgLoader id="testchangepath1" path={this.state.tempPath}>
          <SvgProxy
            d="dd"
            selector="#Star"
            onElementSelected={this.changeFillOnSelected.bind(this)}
          />
        </SvgLoader>
        <button id="btnChangePath" onClick={this.toggleTempPath.bind(this)}>
          change path{" "}
        </button>

        <p> Set attribute with namespace(xlink:href) </p>
        <SvgLoader id="changeimagelink" path="1.svg">
          <SvgProxy selector="#testImage" xlink_href="image.png" />
        </SvgLoader>

        <p> Animated value </p>
        <SvgLoader id="animated" path="1.svg">
          <AttributeMotion
            selector="#Star"
            start={{
              opacity: 0
            }}
            target={{
              opacity: this.state.opacity
            }}
          />
        </SvgLoader>
        <button id="btnAnimate" onClick={this.setOpacity.bind(this)}>
          Animate opacity{" "}
        </button>
        <p> Change proxy selector should update element {this.state.dynamicSelector} </p>
        <SvgLoader id="changeproxyselector" path="3.svg">
          <SvgProxy selector={this.state.dynamicSelector} fill="red" onElementSelected={this.onElementSelectedDynamic}/>
        </SvgLoader>
        <button id="btnChangeSelector" onClick={this.changeSelector.bind(this)}>
          Change selector
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
