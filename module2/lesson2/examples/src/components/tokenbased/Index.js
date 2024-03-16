import React, { useState } from "react";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const login = async () => {
    try {
      const response = await axios.post("https://api.example.com/login", {
        username: "username",
        password: "password",
      });
      const { access } = response.data;
      setToken(access);
      fetchData(access); // Automatically fetch data after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchData = async (token) => {
    try {
      const response = await axios.get("https://api.example.com/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={() => fetchData(token)} disabled={!token}>
        Fetch Data
      </button>
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Index;
