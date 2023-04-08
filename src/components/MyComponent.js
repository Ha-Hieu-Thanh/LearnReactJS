// class component
// function component

import React from "react";
import UserInfo from "./UserInfo";
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

  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
