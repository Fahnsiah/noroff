import React, { useEffect } from "react";

// Define the HOC function
const withLogger = (WrappedComponent) => {
  // Define the wrapper component
  const WithLogger = (props) => {
    // Add logging functionality in useEffect hook
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name || "Anonymous"} mounted`);
      return () => {
        console.log(
          `Component ${WrappedComponent.name || "Anonymous"} unmounted`
        );
      };
    }, []);

    // Render the wrapped component with props
    return <WrappedComponent {...props} />;
  };

  // Return the wrapper component
  return WithLogger;
};

// Example functional component
const MyComponent = () => {
  return <div className="my-container">Hello, World!</div>;
};

// Enhance MyComponent with logging using the withLogger HOC
const IndexWithLogger = withLogger(MyComponent);

// Export the enhanced component
export default IndexWithLogger;
