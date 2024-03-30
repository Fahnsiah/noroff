import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ToDo from "./components/todo/ToDo";
import PrivateRoute from "./components/routes/ProtectedRoute";
import SideNav from "./components/nav/SideNav";

function App() {
  return (
    <div className="my-container">
      <SideNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<ToDo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
