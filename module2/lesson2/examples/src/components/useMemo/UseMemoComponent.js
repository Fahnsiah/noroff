import React, { useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseMemoComponent = () => {
  const [mounted, setMounted] = useState(false);
  const [number, setNumber] = useState(0);
  const [fibonacci, setFibonacci] = useState(0);

  const calculateFibonacci = useMemo((n) => {
    if (n <= 1) {
      return n;
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }, []);

  const handleChange = (event) => {
    const inputNumber = parseInt(event.target.value, 10);
    if (!isNaN(inputNumber)) {
      setNumber(inputNumber);
      setFibonacci(calculateFibonacci(inputNumber));
    }
  };

  return (
    <div className="my-container">
      {mounted && (
        <div>
          <h2>Fibonacci Calculator</h2>
          <label htmlFor="numberInput">Enter a number:</label>

          <p>
            Fibonacci of {number} is {fibonacci}
          </p>
        </div>
      )}
    </div>
  );

  // const [number, setNumber] = useState(0);
  // return (
  //   <div className="my-container">
  //     <ChildComponent n={2} />
  //   </div>
  // );
};

export default UseMemoComponent;
