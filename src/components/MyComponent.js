// class component
// function component

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  // Moi khi cap nhat state thi ham render se duoc goi lai
  state = {
    listUsers: [
      { id: 1, name: "Hieu Thanh 1", age: 16, address: "Thai Nguyen 1" },
      { id: 2, name: "Hieu Thanh 2", age: 26, address: "Thai Nguyen 2" },
      { id: 3, name: "Hieu Thanh 3", age: 69, address: "Thai Nguyen 3" },
    ],
  };

  handleAddNewUser = (userObj) => {
    let new_obj = { ...userObj, id: Date.now() };
    this.setState({ listUsers: [new_obj, ...this.state.listUsers] });
  };

  handleDeleteUser = (id) => {
    let newListUsers = this.state.listUsers.filter((user) => user.id !== id);
    this.setState({ listUsers: newListUsers });
  };
  // component = template + logic js
  // template = html + css
  // JSX co the in duoc string, number, khong hien thi duoc object, array, function, true, false, ...
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <DisplayInfo
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default MyComponent;
