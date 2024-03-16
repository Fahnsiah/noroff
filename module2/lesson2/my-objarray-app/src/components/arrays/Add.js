import React, { useState } from "react";

const Add = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  const addTask = () => {
    setTasks([...tasks, "Task 3"]); // Add new task to array
  };

  return (
    <div>
      <h3>Add Value to Array</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default Add;
