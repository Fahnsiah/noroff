import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Reducer = () => {
  // Initial state
  const initialState = { count: 0 };

  // Initializing state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="my-container">
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Reducer;
