import React, { useState } from "react";
import ForLoop from "./ForLoop";
const Loop = () => {
  const [data, setData] = useState({
    name: "John",
    age: 30,
    email: "john@example.com",
  });
  const renderData = () => {
    const elements = [];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        elements.push(
          <li key={key}>
            <strong>{key}:</strong> {data[key]}
          </li>
        );
      }
    }
    return elements;
  };
  return (
    <div>
      <div>
        <h2>Examples of Looping Objects</h2>
      </div>
      <div>
        <h3>Looping with Object.key() Method</h3>
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {data[key]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Looping with Object.entries() Method</h3>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Looping with For...in</h3>
        <ForLoop />
      </div>
    </div>
  );
};

export default Loop;
