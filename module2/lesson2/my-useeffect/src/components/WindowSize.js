import React, { useEffect, useState } from "react";

const WindowSize = () => {
  // Define a state to store the window width
  const [windowWidth, setWindowWidth] = useState(0);
  const [data, setData] = useState([{}]);

  // Define a function to update the window width state
  //This can be a time consuming task like fetching remote data
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    //Call the function when component mounts to set the window sixe
    handleResize();

    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);
    // Clean up by removing event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div>
      <h2>Window Resize Example</h2>
      <h3>Window Width: {windowWidth}</h3>
    </div>
  );
};

export default WindowSize;
