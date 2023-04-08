import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// class DisplayInfo extends React.Component {
//   render() {
//     // Destructuring
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     return (
//       // props => properties
//       <div className="display-info-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div
//                   key={user.id}
//                   className={+user.age >= 18 ? "green" : "red"}
//                 >
//                   <div>
//                     <p>Name: {user.name}</p>
//                     <p>Age: {user.age}</p>
//                     <p>Address: {user.address}</p>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}{" "}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  // Destructuring
  const { listUsers } = props;

  const [isShowHideListUser, setIsShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };

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
