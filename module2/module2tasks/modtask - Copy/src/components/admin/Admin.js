import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import Create from "./Create";

const Admin = () => {
  const [data, setData] = useState([{}]);
  const [createMode, setCreateMode] = useState(false);

  const handleCreateMode = () => {
    setCreateMode(!createMode);
  };
  const getData = async () => {
    await axiosInstance
      .get("user/")
      .then((response) => {
        let data = response.data;
        // alert(JSON.stringify(data));
        setData(data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return createMode ? (
    <div className="container">
      <br />
      <div className="new-button-div">
        <button
          className="btn btn-outline-secondary"
          onClick={handleCreateMode}
        >
          Back to List
        </button>
      </div>
      <Create />
    </div>
  ) : (
    <div>
      <h3>List of Users</h3>
      <div className="new-button-div pull-right">
        <button className="btn btn-outline-primary" onClick={handleCreateMode}>
          Add New
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <th>No.</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Is Admin</th>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.username}</td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.email}</td>
              <td>{val.is_superuser ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
