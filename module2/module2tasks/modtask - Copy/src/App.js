import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Admin from "./components/admin/Admin";
import Student from "./components/student/Student";
import Denied from "./components/Denied";
import SideNav from "./components/nav/SideNav";
import Cookies from "js-cookie";
import TopNav from "./components/nav/TopNav";
import PrivateRoute from "./components/routes/ProtectedRoute";
import Footer from "./components/footer/Footer";

function App() {
  const access = Cookies.get("access");
  return (
    <div className="container">
      <div className="row bg-primary">
        <div className="col-12 text-center">
          <TopNav />
        </div>
      </div>
      <div className="row">
        <div className={access ? "col-2 side-bar" : "hide-side-bar"}>
          <SideNav />
        </div>
        <div className={access ? "col-10 main-content" : "col-12 main-content"}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/student" element={<Student />} />
            </Route>
            <Route path="*" element={<Denied />} />
          </Routes>
        </div>
      </div>

      <div className="row footer">
        <div className="col-12 text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
