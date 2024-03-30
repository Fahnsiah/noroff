import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/student">Student</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
