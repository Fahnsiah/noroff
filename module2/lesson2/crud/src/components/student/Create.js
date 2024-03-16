import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

let myStyle = [{ marginTop: "20px" }];
const Create = ({ formData, handleFormData, handleSubmit }) => {
  return (
    <Box
      sx={{
        width: "40%",
        marginInlineStart: "30%",
        backgroundColor: "whitesmoke",
        marginTop: "25px",
        padding: "25px",
      }}
    >
      <h3>New Student</h3>

      <FormControl fullWidth sx={{ marginTop: "20px" }}>
        <InputLabel htmlFor="first_name">First Name</InputLabel>
        <Input
          name="first_name"
          aria-describedby="first name"
          value={formData.first_name}
          onChange={(e) => handleFormData(e)}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: "20px" }}>
        <InputLabel htmlFor="middle_name">Middle</InputLabel>
        <Input
          name="middle_name"
          type="text"
          aria-describedby="middle name"
          value={formData.middle_name}
          onChange={(e) => handleFormData(e)}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: "20px" }}>
        <InputLabel htmlFor="last_name">Last Name</InputLabel>
        <Input
          name="last_name"
          type="text"
          aria-describedby="last name"
          value={formData.last_name}
          onChange={(e) => handleFormData(e)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "20px" }}>
        <InputLabel htmlFor="dob">Date of Birth</InputLabel>
        <Input
          name="dob"
          type="date"
          aria-describedby="date of birth"
          value={formData.dob}
          onChange={(e) => handleFormData(e)}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: "25px" }}>
        <InputLabel name="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          name="gender"
          value={formData.gender}
          label="Gender"
          onChange={(e) => handleFormData(e)}
        >
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />
      <FormControl fullWidth>
        <Button variant="contained" onClick={() => handleSubmit()}>
          Save
        </Button>
      </FormControl>
    </Box>
  );
};

export default Create;
