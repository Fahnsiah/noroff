import React, { useState } from "react";
import axios from "axios";

const url = "https://noroffapi.pythonanywhere.com/";
const Index = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const login = async () => {
    const response = await axios
      .post(url + "login/", {
        username: "admin",
        password: "admin",
      })
      .then((response) => {
        const { access } = response.data;
        setToken(access);
      })
      .catch((error) => {
        // Error occurred during the request
        setError(error.message);
      });
  };

  const fetchData = async (token) => {
    const response = await axios
      .get(url + "todo/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // Error occurred during the request
        setError(error.message);
      });
  };

  return (
    <div className="my-container">
      <button onClick={() => login()}>Login</button>
      {token && <p className="text-primary">Successful Login</p>}
      <br />
      {token && <button onClick={() => fetchData(token)}>Fetch Data</button>}
      <br /> <br />
      {data && (
        <div>
          <p className="text-primary">Fetched Data</p>
          <ul>
            {data.map((item) => (
              <li key={item.id}> {item.activity}</li>
            ))}
          </ul>
        </div>
      )}
      {error && <p className="text-danger">Error: {error}</p>}
    </div>
  );
};

export default Index;
