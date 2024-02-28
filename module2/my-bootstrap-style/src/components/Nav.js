import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div classNameName="container-fluid">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="list-group-item">
          <Link to="/member">Members</Link>
        </li>
        <li className="list-group-item">
          <Link to="/contribution">Contributions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
