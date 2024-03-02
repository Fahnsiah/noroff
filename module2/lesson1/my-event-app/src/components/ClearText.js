import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

const ClearText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Grid className="grid-style">
      <Box className="box-style">
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={() => setValue("")}>Clear</button>
      </Box>
    </Grid>
  );
};

export default ClearText;
