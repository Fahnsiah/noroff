import React, { useState } from "react";

const Update = () => {
  const [user, setUser] = useState({ name: "John", age: 30 });

  const updateName = () => {
    setUser({ ...user, name: "Jane" }); // Update name property
  };

  return (
    <div>
      <h3>Example of Update</h3>
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
};

export default Update;
