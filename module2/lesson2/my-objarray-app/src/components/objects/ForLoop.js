import React, { useState } from "react";

const ForLoop = () => {
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
      <ul>{renderData()}</ul>
    </div>
  );
};

export default ForLoop;
