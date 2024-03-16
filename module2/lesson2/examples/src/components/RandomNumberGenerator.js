import React, { useState, useEffect } from "react";

const RandomNumberGenerator = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    generateRandomNumbers();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const generateRandomNumbers = () => {
    const targetSum = 4070;
    let remainingSum = targetSum;
    const numbers = [];

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * remainingSum);
      numbers.push(randomNumber);
      remainingSum -= randomNumber;
    }

    // Add the last number to ensure the total sum is 4070
    numbers.push(targetSum - numbers.reduce((acc, curr) => acc + curr, 0));

    // Shuffle the array to avoid bias
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    setRandomNumbers(numbers);
  };

  return (
    <div className="my-container">
      <h1>Random Numbers that sum to 4070:</h1>
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomNumberGenerator;
