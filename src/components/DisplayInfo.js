import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // Destructuring
    const { name, age, address } = this.props;
    return (
      // props => properties
      <div>
        <p>My name is {name}</p>
        <p>My age is {age}</p>
        <p>My address is {address}</p>
      </div>
    );
  }
}

export default DisplayInfo;
