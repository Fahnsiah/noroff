import React from "react";
import AppContext from "../context/AppContext";

const ChildOne = () => {
  return (
    <div>
      <h3>First Child Only Displaying Message</h3>
      <AppContext.Consumer>
        {(data) => <h3>Message: {data.message}</h3>}
      </AppContext.Consumer>
    </div>
  );
};

export default ChildOne;
