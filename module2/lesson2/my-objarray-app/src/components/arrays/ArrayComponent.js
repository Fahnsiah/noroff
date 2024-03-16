import React from "react";
import Add from "./Add";
import Remove from "./Remove";
import Func from "./Func";

const ArrayComponent = () => {
  return (
    <div>
      <h2>Manipulating State in Arrays</h2>
      <Add />
      <hr />
      <Remove />
      <hr />
      <Func />
      <hr />
    </div>
  );
};

export default ArrayComponent;
