import React, { useState } from "react";

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      name: name,
      address: address,
      age: age,
    });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <label>Your name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        ></input>

        <label>Your age: </label>
        <input
          type="text"
          value={age}
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        ></input>

        <label>Your address: </label>
        <input
          type="text"
          value={address}
          onChange={(event) => {
            handleOnChangeAddress(event);
          }}
        ></input>

        <button>Submit</button>
      </form>
      My name is {name}
      <br />
      My address is {address}
      <br />
      My age is {age}
      <br />
    </div>
  );
};

export default AddUserInfo;
