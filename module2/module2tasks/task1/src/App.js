import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Student from "./components/students/Student";
import PrivateRoute from "./components/routes/ProtectedRoute";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import SideNav from "./components/nav/SideNav";

function App() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };
  return (
    <div className="App">
      {token && <button onClick={() => handleLogout()}>Logout</button>}
      {token && <SideNav />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
