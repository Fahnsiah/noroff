import React, { useState } from "react";
import ChildState from "./ChildState";
const ParentState = () => {
  const [greeting, setGreeting] = useState("Greeting From Parent Component");
  return (
    <div>
      <ChildState greeting={greeting} />
    </div>
  );
};

export default ParentState;
