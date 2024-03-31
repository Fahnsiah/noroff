import axios from "axios";
import { response } from "express";
import React, { useState, useEffect } from "react";

export interface ToDo {
  id: number;
  activity: string;
  status: string;
}
const ToDo: React.FC = () => {
  const [data, setData] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [activity, SetActivity] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await axios.get<ToDo[]>(
        "https://noroffapi.pythonanywhere.com/todo/"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  const addToDo = async () => {
    await axios
      .post<ToDo[]>("https://noroffapi.pythonanywhere.com/todo/", {
        activity: activity,
        status: "Pending",
      })
      .then((response) => {
        setLoading(false);
        fetchData();
        SetActivity("");
      })
      .catch((error) => {
        alert("Add Error" + error);
        setLoading(false);
      });
  };
  const updateTodoStatus = async (id: number, status: string) => {
    try {
      let found = data.find((x) => x.id == id);
      await axios
        .put<ToDo[]>(`https://noroffapi.pythonanywhere.com/todo/${id}/`, {
          id: id,
          activity: found?.activity,
          status: status,
        })
        .then((response) => {
          setLoading(false);
          fetchData();
        })
        .catch((error) => {
          alert("Update error " + error);
          setLoading(false);
        });
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  const deleteTodo = async (id: number) => {
    await axios
      .delete<ToDo[]>(`https://noroffapi.pythonanywhere.com/todo/${id}`)
      .then((response) => {
        setLoading(false);
        fetchData();
      })
      .catch((error) => {
        alert("Delete error " + error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <h3 className="mt-6">Asynchronous Operations with TypeScript</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <table className="table table-striped">
        <thead>
          <th>No</th>
          <th>Activity</th>
          <th>Status</th>
          <th>Action</th>
        </thead>

        <tbody>
          {data.map((item: ToDo) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.activity}</td>
              <td>{item.status}</td>
              <td>
                {item.status !== "Completed" && (
                  <button
                    className="btn btn-success"
                    onClick={() => updateTodoStatus(item.id, "Completed")}
                  >
                    Mark as Completed
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>
              <input
                type="text"
                className="form-control"
                placeholder="enter new activity here"
                value={activity}
                onChange={(e) => SetActivity(e.target.value)}
              />
            </td>
            <td>
              <button className="btn btn-primary btn-block" onClick={addToDo}>
                Add To Do
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToDo;
