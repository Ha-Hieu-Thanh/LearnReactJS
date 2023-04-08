import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // Destructuring
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      // props => properties
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Address: {user.address}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
