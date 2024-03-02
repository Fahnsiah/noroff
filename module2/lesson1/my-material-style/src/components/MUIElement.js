import { Button, ButtonGroup, Switch, TextField } from "@mui/material";
import React from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };

const MUIElement = () => {
  return (
    <div>
      <h2>MUI Styled Element</h2>
      <br />
      <h3>Styled Buttons</h3>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>Submit</Button>
        <Button>Cancel</Button>
        <Button>Approve</Button>
      </ButtonGroup>
      <hr />
      <h3>Styled Text Fields</h3>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <hr />
      <h3>Styled Switches</h3>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
      <hr />
    </div>
  );
};

export default MUIElement;
