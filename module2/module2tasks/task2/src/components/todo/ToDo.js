import React, { useEffect, useState } from "react";

const myData = [
  {
    id: 1,
    activity: "Activity 1",
    status: "New",
  },
  {
    id: 2,
    activity: "Activity 2",
    status: "New",
  },
  {
    id: 3,
    activity: "Activity 3",
    status: "New",
  },
];
const ToDo = () => {
  const [data, setData] = useState([{}]);

  const handleActivity = () => {
    setData(myData);
  };

  useEffect(() => {
    handleActivity();
  }, []);

  return (
    <div>
      <h2>To Do</h2>

      <table>
        <thead>
          <th>Id</th>
          <th>Activity</th>
          <th>Status</th>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.activity}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDo;
