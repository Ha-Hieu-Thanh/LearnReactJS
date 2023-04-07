// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hieu Thanh",
    address: "Hanoi",
    age: 20,
  };

  handleClick(event) {
    console.log("Click me");
  }

  handleOnMouseOver(event) {
    console.log("Mouse over");
    // print x, y
    console.log(event.pageX, event.pageY);
  }
  // JSX (viet code js trong html)
  render() {
    return (
      <div>
        My name is {this.state.name}
        <br />
        My address is {this.state.address}
        <br />
        My age is {this.state.age}
        <br />
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
        {/* {} to write js code */}
      </div>
    );
  }
}

export default MyComponent;
