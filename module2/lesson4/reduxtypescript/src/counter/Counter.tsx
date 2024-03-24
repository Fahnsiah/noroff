import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../action/Action";

const Counter: React.FC = () => {
  const count = useSelector((state: { count: number }) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Counter</h4>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
