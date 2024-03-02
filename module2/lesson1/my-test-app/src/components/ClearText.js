import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
const sum = require("./Sum");

const ClearText = () => {
  const [value, setValue] = useState(sum(2, 5));

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Grid className="grid-style">
      <Box className="box-style">
        <input
          type="text"
          data-testid="tstInput"
          value={value}
          onChange={handleChange}
        />
        <button
          name="clear"
          data-testid="tstbutton"
          onClick={() => setValue("")}
        >
          Clear
        </button>
      </Box>
    </Grid>
  );
};

export default ClearText;
