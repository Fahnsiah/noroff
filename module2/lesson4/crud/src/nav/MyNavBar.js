import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Cookies from "js-cookie";

import { AuthContext } from "../components/context/AuthContext";

export default function MyNavBar() {
  const { logout } = useContext(AuthContext);

  const token = Cookies.get("access_token");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CRUD
          </Typography>
          {token && (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
