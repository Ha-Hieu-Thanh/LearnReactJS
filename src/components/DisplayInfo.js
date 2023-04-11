import React, { useState, useEffect } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

const DisplayInfo = (props) => {
  // Destructuring
  const { listUsers } = props;

  const [isShowHideListUser, setIsShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("List user is empty");
    }
    console.log("useEffect");
  }, [listUsers]);
  // []: chay 1 lan duy nhat khi component duoc render
  // [listUsers]: chay lai khi listUsers thay doi
  // [isShowHideListUser]: chay lai khi isShowHideListUser thay doi
  // [listUsers, isShowHideListUser]: chay lai khi listUsers hoac isShowHideListUser thay doi
  // empty: chay lai khi prop hoac state thay doi

  return (
    // props => properties
    <div className="display-info-container">
      <div>
        <button
          onClick={() => {
            handleShowHideListUser();
          }}
        >
          {isShowHideListUser ? "Hide" : "Show"}
        </button>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                <div>
                  <p>Name: {user.name}</p>
                  <p>Age: {user.age}</p>
                  <p>Address: {user.address}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}{" "}
    </div>
  );
};

export default DisplayInfo;
