// class component
// function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    const myInfo = ["Hieu Thanh", 30, "Thai Nguyen"];
    const myAddress = "Thai Nguyen";
    return (
      <div>
        <UserInfo />
        <DisplayInfo name="Ha Hieu Thanhhh" age="30" address="Dinh Hoa" />
        <DisplayInfo name="Ha Hieu " age={50} address={myAddress} />
        <DisplayInfo
          name="Ha Hieu "
          age={50}
          address={myAddress}
          myInfo={myInfo}
        />
      </div>
    );
  }
}

export default MyComponent;
