import React, { useState } from "react";

const Func = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const doubledNumbers = numbers.map((num) => num * 2);
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  return (
    <div>
      <div>
        <h3>Content of Array</h3>
        {numbers.join(", ")}
      </div>
      <div>
        <h3>Example of Map() on Array</h3>
        <ul>
          {doubledNumbers.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Example of Filter() on Array</h3>
        {numbers.filter((item) => item % 2 == 0).join(", ")}
      </div>

      <div>
        <h3>Example of Find() on Array</h3>
        {numbers.find((item) => item > 3)}
      </div>

      <div>
        <h3>Example of Reduce() on Array</h3>
        {numbers.reduce((acc, curr) => acc + curr, 0)}
      </div>
    </div>
  );
};

export default Func;
