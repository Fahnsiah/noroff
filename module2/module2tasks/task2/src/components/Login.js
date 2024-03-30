// Login.js
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username) {
      alert("Please enter username");
    } else if (!password) {
      alert("Please enter password");
    } else {
      Cookies.set("token", username);
      navigate("/dashboard");
    }
    // if (username === "admin" && password === "admin") {
    //   setIsAuthenticated(true);
    // } else {
    //   alert("Invalid credentials");
    // }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
