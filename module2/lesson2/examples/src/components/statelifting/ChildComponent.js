import React from "react";

const ChildComponent = ({ count, incrementCount }) => {
  return (
    <div>
      <h4>Child Component</h4>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ChildComponent;
