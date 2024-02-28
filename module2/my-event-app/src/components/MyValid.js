import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const MyValid = () => {
  const [formData, setFormData] = useState({ username: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      return;
    }
    setErrors({});
    alert("User Input: " + formData.username);
  };
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box bgcolor={"#f2daa5"} sx={{ height: 500, width: 400, padding: 5 }}>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default MyValid;
