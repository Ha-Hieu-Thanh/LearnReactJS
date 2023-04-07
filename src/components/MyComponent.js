// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hieu Thanh",
    address: "Hanoi",
    age: 20,
  };

  handleClick = (event) => {
    console.log("Click me");
    console.log(`My name is ${this.state.name}`);

    let curAge = this.state.age;
    curAge = curAge + 1;
    this.setState({ age: curAge });
  };

  handleOnMouseOver = (event) => {
    console.log("Mouse over");

    console.log(``); // print x, y
    console.log(event.pageX, event.pageY);
  };

  handleOnChangeInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
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
        {/* <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button> */}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
        {/* {} to write js code */}
      </div>
    );
  }
}

export default MyComponent;
