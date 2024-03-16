import React from "react";

const ChildComponent = ({ onClick }) => {
  return (
    <div className="my-container">
      <h3>Child Component</h3>
      {/* Call the callback function when the button is clicked */}
      <button onClick={onClick}>Increment Count</button>
    </div>
  );
};

export default ChildComponent;
