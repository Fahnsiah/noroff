import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div classNameName="container-fluid">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
