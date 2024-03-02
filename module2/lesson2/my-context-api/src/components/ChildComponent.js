import React from "react";
import AppContext from "../context/AppContext";

const ChildComponent = () => {
  return (
    <div>
      <h2>Child Component</h2>
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

export default ChildComponent;
