import React from "react";
import Update from "./Update";
import Merge from "./Merge";
import Loop from "./Loop";

const ObjectComponent = () => {
  return (
    <div>
      <h2>Manipulation of Objects</h2>
      <Update />
      <hr />
      <Merge />
      <hr />
      <Loop />
    </div>
  );
};

export default ObjectComponent;
