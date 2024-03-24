import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "./components/student/Index";
import Login from "./components/Login";
import PrivateRoute from "./components/route/ProtectedRoute";
import { AuthProvider } from "./components/context/AuthContext";
import MyNavBar from "./nav/MyNavBar";
import { Container } from "@mui/material";

const App = () => {
  return (
    <AuthProvider>
      <Container sx={{ backgroundColor: "whitesmoke", height: "100%" }}>
        <MyNavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Student />} />
          </Route>
        </Routes>
      </Container>
    </AuthProvider>
  );
};

export default App;
