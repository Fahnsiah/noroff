// Login.js
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username) {
      alert("Please enter username");
    } else if (!password) {
      alert("Please enter password");
    } else {
      await axios
        .post("https://noroffapi.pythonanywhere.com/login/", {
          username: username,
          password: password,
        })
        .then((response) => {
          let data = response.data;

          Cookies.set("access", data.access);
          Cookies.set("reftresh", data.refresh);
          Cookies.set("role", data.role);
          navigate("/dashboard");
        })
        .catch((error) => {
          alert(error);
        });
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="login-form">
        <br />
        <p>Please login</p>
        <div class="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="id_username"
          />
          <label for="id_username">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="id_password"
          />
          <label for="id_password">Password</label>
        </div>
        <br />
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Login;
