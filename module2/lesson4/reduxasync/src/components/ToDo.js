// src/components/UserComponent.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDoData } from "../actions/Actions";

const ToDo = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchToDoData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h4>User Data</h4>
      {data && (
        <table>
          <thead>
            <tr>
              <th>ACTIVITY</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.activity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ToDo;
