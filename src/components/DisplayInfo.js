import React from "react";

class DisplayInfo extends React.Component {
  render() {
    return (
      // props => properties
      <div>
        <p>My name is {this.props.name}</p>
        <p>My age is {this.props.age}</p>
        <p>My address is {this.props.address}</p>
      </div>
    );
  }
}

export default DisplayInfo;
