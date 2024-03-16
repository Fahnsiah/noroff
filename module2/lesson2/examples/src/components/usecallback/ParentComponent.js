import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Define the callback function with a dependency
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]); // Dependency: setCount function

  return (
    <div className="my-container">
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      {/* Pass the callback function as prop to ChildComponent */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
