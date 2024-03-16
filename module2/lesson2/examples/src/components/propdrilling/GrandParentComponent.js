import React from "react";
import ParentComponent from "./ParentComponent";

const GrandParentComponent = ({ data }) => {
  return (
    <div>
      <h3>GrandParent Component</h3>
      <ParentComponent data={data} />
    </div>
  );
};

export default GrandParentComponent;
