import * as React from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { BuildCircle, DashboardOutlined } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <DashboardOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link to="/">Dashboard</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BuildCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link to="/element">MUI Elements Example</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BuildCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link to="/form">MUI Form Example</Link>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default Sidebar;
