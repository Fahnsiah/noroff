import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const access = Cookies.get("access");
  const admin = Cookies.get("role");
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("access");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <ul class="nav flex-column">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {admin == "True" && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        {admin == "False" && (
          <li>
            <Link to="/student">Student</Link>
          </li>
        )}
      </ul>

      <div className="mt-5">
        {access && (
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
