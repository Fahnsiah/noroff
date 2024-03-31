import React from "react";

const Table = ({ data, updateTodoStatus, deleteTodo }) => {
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <th>No</th>
          <th>Activity</th>
          <th>Status</th>
          <th>Action</th>
        </thead>

        <tbody>
          {data.map((item) => (
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
