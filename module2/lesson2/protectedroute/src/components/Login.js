import React, { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login">
      <h4>User Login</h4>
      <br />
      <div class="form-floating mb-3">
        <input
          type="username"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="floatingInput">Username</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="floatingPassword">Password</label>
      </div>
      <br />
      <div class="d-grid gap-2">
        <button
          class="btn btn-primary"
          type="button"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
