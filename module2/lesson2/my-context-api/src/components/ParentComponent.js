import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const ParentComponent = () => {
  return (
    <div>
      <h2>Parent Child Calling Two Child Components</h2>
      <hr />
      <ChildOne />
      <hr />
      <ChildTwo />
    </div>
  );
};

export default ParentComponent;
