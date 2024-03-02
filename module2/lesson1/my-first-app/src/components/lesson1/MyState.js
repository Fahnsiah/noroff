import React, { useState } from "react";

const MyState = () => {
  const [greeting, setGreeting] = useState("Hello From State Management");
  const changeGreeting = () => {
    setGreeting("Greeting my dear friend!");
  };
  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={changeGreeting}>Change Greeting</button>
    </div>
  );
};

export default MyState;
