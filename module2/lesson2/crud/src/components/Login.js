import { Box, FormControl, Button, Input, InputLabel } from "@mui/material";
import React, { useContext, useState } from "react";
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
    <Box
      sx={{
        width: "30%",
        marginInlineStart: "35%",
        backgroundColor: "whitesmoke",
        marginTop: "75px",
        padding: "25px",
      }}
    >
      <p>Please login</p>

      <FormControl fullWidth>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          aria-describedby="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: "20px" }}>
        <InputLabel htmlFor="username">Password</InputLabel>
        <Input
          id="password"
          type="password"
          aria-describedby="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: "20px" }}>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
