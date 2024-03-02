import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  Radio,
  MenuItem,
  Select,
  Grid,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  InputLabel,
  FormControl,
  FormGroup,
} from "@mui/material";

const MyForm = () => {
  const [formData, setFormData] = useState({});
  const [checked, setChecked] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGender = (e) => {
    if (e == 1) {
      setFormData({ ...formData, gender: "Female" });
    } else if (e == 2) {
      setFormData({ ...formData, gender: "Male" });
    } else {
      setFormData({ ...formData, gender: "Other" });
    }
  };

  const handleCheck = () => {
    setFormData({ ...formData, terms: !checked });
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        container
        direction={"row"}
        spacing={24}
        sx={{
          width: 500,
          height: "100vh",
          backgroundColor: "#f0efb4",
          padding: 5,
          border: 1,
          textAlign: "left",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container direction={"column"} spacing={1}>
            <Grid item>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item>
              <TextField
                type="email"
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                type="date"
                fullWidth
                label="Date of Birth"
                variant="outlined"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <FormLabel id="row-radio-buttons-group-label">
                  Gender{" "}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    onChange={() => handleGender(1)}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    onChange={() => handleGender(2)}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    onChange={() => handleGender(3)}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                rows={5}
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id="nationality-label">Nationality</InputLabel>
                <Select
                  labelId="nationality-label"
                  id="nationality"
                  label="nationality"
                  required
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>Norway</MenuItem>
                  <MenuItem value={2}>United States</MenuItem>
                  <MenuItem value={3}>United Kingdom</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleCheck} />}
                  label="I agree to the terms and conditions"
                />
              </FormGroup>
            </Grid>
          </Grid>
          <br />
          <br />
          <Button fullWidth type="submit" variant="contained">
            Submit Form
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default MyForm;
