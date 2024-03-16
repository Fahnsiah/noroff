import { useState, useEffect } from "react";

const useKeyPress = (targetKey) => {
  // State to track if the target key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // Function to handle key down event
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  // Function to handle key up event
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners when component mounts
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners when component unmounts
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]); // Re-run effect if targetKey changes

  return keyPressed;
};

export default useKeyPress;
