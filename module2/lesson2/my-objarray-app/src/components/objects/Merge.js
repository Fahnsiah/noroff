import React, { useState } from "react";

const Merge = () => {
  const [user, setUser] = useState({ name: "Kerkula", age: 30 });

  const updateData = () => {
    const newData = { age: 45, email: "kerkula@domain.com" };
    setUser({ ...user, ...newData }); // Merge new data into existing object
  };

  return (
    <div>
      <h3>Example of Merging Objects</h3>
      <p>
        Name: {user.name}, Age: {user.age}, Email: {user.email}
      </p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default Merge;
