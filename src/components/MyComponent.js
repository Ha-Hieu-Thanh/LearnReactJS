// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hieu Thanh",
    address: "Hanoi",
    age: 20,
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
        {/* {} to write js code */}
      </div>
    );
  }
}

export default MyComponent;
