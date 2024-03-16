import React from "react";
import MeasureDom from "./MeasureDom";
import ImperativeDom from "./ImperativeDom";

const Index = () => {
  return (
    <div className="my-container">
      <h3>Measuring DOM Element</h3>
      <MeasureDom />

      <br />
      <br />
      <h3>Imperative DOM Manipulation</h3>
      <ImperativeDom />
    </div>
  );
};

export default Index;
