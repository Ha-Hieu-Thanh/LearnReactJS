import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Hieu Thanh",
    address: "Hanoi",
    age: 20,
  };

  handleOnChangeInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnChangeAge = (event) => {
    this.setState({ age: event.target.value });
  };

  handleOnChangeAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name}
        <br />
        My address is {this.state.address}
        <br />
        My age is {this.state.age}
        <br />
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label>Your name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          ></input>

          <label>Your age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          ></input>

          <label>Your address: </label>
          <input
            type="text"
            value={this.state.address}
            onChange={(event) => {
              this.handleOnChangeAddress(event);
            }}
          ></input>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
