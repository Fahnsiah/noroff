import React, { useState } from "react";
import { Box, Button, Stack, TextField, inputBaseClasses } from "@mui/material";

const Home = () => {
  const [buttonTitle, setButtonTitle] = useState("Show Form");
  const [showForm, setShowForm] = useState(false);

  const handleClickMe = () => {
    alert("You did click me");
  };

  const handleShowForm = () => {
    if (showForm) {
      setButtonTitle("Show Form");
    } else {
      setButtonTitle("Hide Form");
    }
    setShowForm(!showForm);
  };
  return (
    <Box className="container">
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleClickMe}>
          Click Me
        </Button>

        <Button
          variant="contained"
          onMouseOver={handleShowForm}
          onMouseLeave={handleShowForm}
        >
          {buttonTitle}
        </Button>
      </Stack>
      <br />

      <div>
        {showForm && (
          <form>
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="standard"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Address"
              multiline
              maxRows={4}
            />
          </form>
        )}
      </div>
    </Box>
  );
};

export default Home;
