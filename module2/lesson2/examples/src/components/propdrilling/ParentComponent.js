import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ data }) => {
  return (
    <div>
      <h4>Parent Component</h4>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;
