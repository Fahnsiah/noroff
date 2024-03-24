import React, { useState } from "react";

interface State {
  count: number;
}

const Counter: React.FC = () => {
  const [state, setState] = useState<State>({ count: 0 });

  const increment = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };

  return (
    <div>
      <h4>My State Management Example</h4>
      Count: {state.count}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
