import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const Index = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="my-container">
      <h3>Parent Component</h3>
      <p>Count: {count}</p>
      <ChildComponent count={count} incrementCount={incrementCount} />
    </div>
  );
};

export default Index;
