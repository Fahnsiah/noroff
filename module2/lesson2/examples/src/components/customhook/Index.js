import React from "react";
import useKeyPress from "./useKeyPress"; // Import the custom hook

const Index = () => {
  // Use the custom hook to detect if the 'Enter' key is pressed
  const enterKeyPressed = useKeyPress("Enter");

  return (
    <div>
      <h2>Press Enter Key Example</h2>
      <p>Press the Enter key: {enterKeyPressed ? "Pressed" : "Not Pressed"}</p>
    </div>
  );
};

export default Index;
