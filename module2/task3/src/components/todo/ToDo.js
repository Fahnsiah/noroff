import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const ToDo = () => {
  const [data, setData] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    await axios
      .get("https://noroffapi.pythonanywhere.com/todo/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert("Read error " + error);
      });
  };

  const addTodo = async () => {
    await axios
      .post("https://noroffapi.pythonanywhere.com/todo/", {
        activity: newTodo,
        status: "Pending",
      })
      .then((response) => {
        setNewTodo("");
        fetchTodos(); // Refresh data after adding
      })
      .catch((error) => {
        alert("Create error " + error);
      });
  };

  const updateTodoStatus = async (id, status) => {
    let found = data.find((x) => x.id == id);
    await axios
      .put(`https://noroffapi.pythonanywhere.com/todo/${id}/`, {
        id: id,
        activity: found.activity,
        status: status,
      })
      .then((response) => {
        fetchTodos(); // Refresh data after updating
      })
      .catch((error) => {
        alert("Update error " + error);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`https://noroffapi.pythonanywhere.com/todo/${id}/`)
      .then((response) => {
        fetchTodos(); // Refresh data after deleting
      })
      .catch((error) => {
        alert("Delete error " + error);
      });
  };

  return (
    <div>
      <h3>To Do List</h3>

      <Table
        data={data}
        updateTodoStatus={updateTodoStatus}
        deleteTodo={deleteTodo}
      />

      <h4>Add To Do</h4>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn btn-primary" onClick={addTodo}>
        Add To Do
      </button>
    </div>
  );
};

export default ToDo;

// import React, { useEffect, useState } from "react";

// const myData = [
//   {
//     id: 1,
//     activity: "Activity 1",
//     status: "New",
//   },
//   {
//     id: 2,
//     activity: "Activity 2",
//     status: "New",
//   },
//   {
//     id: 3,
//     activity: "Activity 3",
//     status: "New",
//   },
// ];
// const ToDo = () => {
//   const [data, setData] = useState([{}]);

//   const handleActivity = () => {
//     setData(myData);
//   };

//   useEffect(() => {
//     handleActivity();
//   }, []);

//   return (
//     <div>
//       <h2>To Do</h2>

//       <table>
//         <thead>
//           <th>Id</th>
//           <th>Activity</th>
//           <th>Status</th>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.activity}</td>
//               <td>{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ToDo;
