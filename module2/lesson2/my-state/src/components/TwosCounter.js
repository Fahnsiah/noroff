import React, { useState } from "react";

const TwosCounter = () => {
  // Declare a state variable named 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const incrementCount = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment by Two</button>
    </div>
  );
};

export default TwosCounter;
