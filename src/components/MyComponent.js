// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  // JSX (viet code js trong html)
  render() {
    return (
      <div>
        my first component
        {Math.random()}
        {/* {} to write js code */}
      </div>
    );
  }
}

export default MyComponent;
