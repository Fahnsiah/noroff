import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const MyValid = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setErrors({});
    let valError = { ...errors };
    if (!formData.username.trim()) {
      valError.username = "Username is required.";
    }
    // else{
    //   alert("The username is " + formData.username)
    // }
    if (!formData.password.trim()) {
      valError.password = "Password is required.";
    }

    setErrors(valError);

    if (Object.keys(valError).length > 0) {
      valError = {};
      return;
    } else {
      console.log("Password: " + formData.password);
      alert(JSON.stringify(formData));
      return;
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box bgcolor={"#f2daa5"} sx={{ height: 300, width: 400, padding: 5 }}>
        <h3>User Login</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <br />
          <br />
          <TextField
            fullWidth
            type="password"
            label="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default MyValid;
