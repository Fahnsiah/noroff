// App.js

import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  return (
    <div>
      <h1>Addition App</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleAdd}>Add</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
