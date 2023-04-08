// class component
// function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo name="Ha Hieu Thanhhh" age="30" address="18" />
        <DisplayInfo name="Ha Hieu " age="32" address="19" />
      </div>
    );
  }
}

export default MyComponent;
