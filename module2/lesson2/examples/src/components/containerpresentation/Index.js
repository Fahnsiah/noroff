import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { data } from "./MyData";
const Index = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //since we have not learned to pull from API yet, let us get our data from an external file
    setTodos(data);
  }, []);

  return (
    <div className="my-container">
      <TodoList todos={todos} />
    </div>
  );
};

export default Index;
