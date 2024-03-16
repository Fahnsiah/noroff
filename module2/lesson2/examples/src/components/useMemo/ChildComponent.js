import React, { useEffect, useMemo, useState } from "react";

const ChildComponent = ({ n }) => {
  const [fibNumber, setFibNumber] = useState(0);
  // Calculate Fibonacci number using useMemo
  const fib = useMemo(() => {
    if (n <= 1) setFibNumber(n);
    setFibNumber(fib(n - 1) + fib(n - 2));
    // if (n <= 1) return n;
    // return fib(n - 1) + fib(n - 2);
  }, [n]); // Dependency array - recalculate only when n changes

  useEffect(() => {
    fib();
  });
  return (
    <p>
      Fibonacci of {n} is {fibNumber}
    </p>
  );
};

export default ChildComponent;
