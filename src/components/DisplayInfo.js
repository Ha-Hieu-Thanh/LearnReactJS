import React from "react";

class DisplayInfo extends React.Component {
  state = { isShowListUsers: true };

  handleShowHide = () => {
    this.setState({ isShowListUsers: !this.state.isShowListUsers });
  };

  render() {
    // Destructuring
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      // props => properties
      <div>
        <div>
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUsers ? "Hide" : "Show"}
          </button>
        </div>
        {this.state.isShowListUsers && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} class={+user.age >= 18 ? "green" : "red"}>
                  <p>Id: {user.id}</p>
                  <p>Name: {user.name}</p>
                  <p>Age: {user.age}</p>
                  <p>Address: {user.address}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
