// MyComponent.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createItem, updateItem } from "../actions/CreateAction";

const Create = ({ item, setItem, setCreateMode, refresh, setRefresh }) => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let newValue = { ...item, [name]: value };
    setItem(newValue);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createItem(item));
    setItem([{}]);
    setCreateMode(false);
    setRefresh(!refresh);
  };
  const handleUpdate = (e) => {
    // e.preventDefault();
    dispatch(updateItem(item));
    setItem([{}]);
    setCreateMode(false);
    setRefresh(!refresh);
  };

  return (
    <div>
      <input
        type="text"
        name="activity"
        value={item.activity}
        onChange={(e) => handleInput(e)}
        placeholder="activity"
      />
      <select
        onChange={(e) => handleInput(e)}
        name="status"
        value={item.status}
      >
        <option value="">Please Select</option>
        <option value="New">New</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      {item.id > 0 ? (
        <button onClick={(e) => handleUpdate(e)}>Edit Item</button>
      ) : (
        <button onClick={(e) => handleCreate(e)}>Create Item</button>
      )}
    </div>
  );
};

export default Create;
