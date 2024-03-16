import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "./components/student/Index";
import Login from "./components/Login";
import PrivateRoute from "./components/route/ProtectedRoute";
import { AuthProvider } from "./components/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Student />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import MyNavBar from "./nav/MyNavBar";
// import Student from "./components/student/Index";

// function App() {
//   return (
//     <Container>
//       <MyNavBar />
//       <Student />
//     </Container>
//   );
// }

// export default App;
