import React from "react";
import AppContext from "../context/AppContext";

const ChildTwo = () => {
  return (
    <div>
      <h3>Second Child Displaying Message and Count Button</h3>
      <AppContext.Consumer>
        {(data) => (
          <div>
            <h3>Message: {data.message}</h3>
            <h3>Count:{data.count}</h3>
            <button onClick={data.increment}>Increment</button>
          </div>
        )}
      </AppContext.Consumer>
    </div>
  );
};

export default ChildTwo;
