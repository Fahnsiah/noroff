import React from "react";

interface Props {
  name: string;
  age: number;
}

const Greet: React.FC<Partial<Props>> = ({ name, age }) => {
  const ageDislpay = age === -1 ? "unknown" : age;
  return (
    <div>
      <h4>My Default Props Example</h4>
      Hello, {name}! You are {ageDislpay} years old.
    </div>
  );
};

Greet.defaultProps = {
  name: "Guest",
  age: -1,
};

export default Greet;
