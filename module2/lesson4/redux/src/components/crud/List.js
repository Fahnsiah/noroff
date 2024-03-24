import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/ReadAction";
import Create from "./Create";
import { deleteItem } from "../actions/CreateAction";

const List = () => {
  const dispatch = useDispatch();
  const retrievedData = useSelector((state) => state.retrievedData);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [createMode, setCreateMode] = useState(false);
  const [dataFetched, setDataFetched] = useState([{}]);
  const [item, setItem] = useState({
    id: "",
    activity: "",
    status: "",
  });
  const [refresh, setRefresh] = useState(false);

  const handleDataFetched = () => {
    let myKey = "data";
    let myData = retrievedData[myKey];
    // alert(myData);
    setDataFetched(myData);
  };

  const handleCreateMode = () => {
    setCreateMode(!createMode);
  };

  const getItemDetail = (id) => {
    let selectedItem = dataFetched.find((item) => item.id === id);
    setItem(selectedItem);
    setCreateMode(!createMode);
  };
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
    setItem([{}]);
    setRefresh(!refresh);
  };

  useEffect(() => {
    handleDataFetched();
  }, [retrievedData]);

  useEffect(() => {
    // alert(refresh);
    dispatch(fetchData());
  }, [dispatch, refresh]);

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        {!createMode && (
          <button onClick={() => handleCreateMode()}>New Item</button>
        )}
        {createMode && (
          <button onClick={() => handleCreateMode()}>Return to List</button>
        )}
      </div>
      {createMode && (
        <Create
          item={item}
          setItem={setItem}
          setCreateMode={setCreateMode}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}
      {!createMode && (
        <div>
          <h3>Data</h3>
          {error && <em>{error}</em>}
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            dataFetched && (
              <table>
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataFetched.map((item) => (
                    <tr id={item.id}>
                      <td>{item.activity}</td>
                      <td>{item.status}</td>
                      <td>
                        <button onClick={() => getItemDetail(item.id)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default List;
