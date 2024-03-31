import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <ul class="nav flex-column">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/todo">ToDo List</Link>
        </li>
      </ul>

      <div className="mt-5">
        {token && (
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

// const SideNav = () => {
//   return (
//     <div>
//       <ul>
// <li>
//   <Link to="/dashboard">Dashboard</Link>
// </li>
// <li>
//   <Link to="/todo">ToDo List</Link>
// </li>
//       </ul>
//     </div>
//   );
// };

// export default SideNav;
