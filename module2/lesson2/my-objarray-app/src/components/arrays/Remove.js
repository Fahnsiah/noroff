import React, { useState } from "react";

const Remove = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((task, index) => index !== indexToRemove)); // Remove task from array
  };

  return (
    <div>
      <h3>Remove Value to Array</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Remove;
