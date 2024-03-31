import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import Create from "./Create";

const Student = () => {
  const [data, setData] = useState([{}]);
  const [newItem, setNewItem] = useState({
    id: 0,
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    gender: "",
  });
  const [createMode, setCreateMode] = useState(false);

  const handleCreateMode = () => {
    setCreateMode(!createMode);
  };

  const handleEdit = (n) => {
    let found = data.find((x) => x.id == n);
    if (found) {
      setNewItem(found);
      handleCreateMode();
    } else {
      alert("Record not found");
    }
  };
  const getData = async () => {
    await axiosInstance
      .get("student/")
      .then((response) => {
        let data = response.data;
        setData(data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleDelete = async (n) => {
    await axiosInstance
      .delete(`student/${n}/`, newItem)
      .then((response) => {
        getData();
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
      <Create
        newItem={newItem}
        setNewItem={setNewItem}
        getData={getData}
        handleCreateMode={handleCreateMode}
      />
    </div>
  ) : (
    <div>
      <h3>List of Students</h3>
      <div className="new-button-div pull-right">
        <button className="btn btn-outline-primary" onClick={handleCreateMode}>
          Add New
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <th>No.</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.first_name}</td>
              <td>{val.middle_name}</td>
              <td>{val.last_name}</td>
              <td>{val.dob}</td>
              <td>{val.gender}</td>
              <td>
                <button
                  className="btn btn-primary mr-4"
                  onClick={() => handleEdit(val.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mr-4"
                  onClick={() => handleDelete(val.id)}
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

export default Student;
