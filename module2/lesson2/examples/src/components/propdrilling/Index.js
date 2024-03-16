import React from "react";
import GrandParentComponent from "./GrandParentComponent";

const Index = () => {
  const data = "Hello, Prop Drilling from Base Component";

  return (
    <div className="my-container">
      <h2>Base Component</h2>
      <GrandParentComponent data={data} />
    </div>
  );
};

export default Index;
