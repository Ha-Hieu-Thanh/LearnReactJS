// class component
// function component

import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
  // Moi khi cap nhat state thi ham render se duoc goi lai

  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hieu Thanh 1", age: 16, address: "Thai Nguyen 1" },
    { id: 2, name: "Hieu Thanh 2", age: 26, address: "Thai Nguyen 2" },
    { id: 3, name: "Hieu Thanh 3", age: 69, address: "Thai Nguyen 3" },
  ]);

  const handleAddNewUser = (userObj) => {
    let new_obj = { ...userObj, id: Date.now() };
    setListUsers([new_obj, ...listUsers]);
  };

  const handleDeleteUser = (id) => {
    let newListUsers = listUsers.filter((user) => user.id !== id);
    setListUsers(newListUsers);
  };

  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponent;
