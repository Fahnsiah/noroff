import { Routes, Route } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import "./App.css";
import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import MUIElement from "./components/MUIElement";
import MUIForm from "./components/MUIForm";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Heading />
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2}>
            <Paper elevation={3}>
              <Sidebar />
            </Paper>
          </Grid>
          <Grid item xs={12} md={10}>
            <Paper elevation={3}>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/element" element={<MUIElement />}></Route>
                <Route path="/form" element={<MUIForm />}></Route>
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}></Grid>
    </Grid>
  );
}

export default App;

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary">Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
    </ThemeProvider>
  );
}
