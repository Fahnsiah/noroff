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
          <Link to="/tokenbased">Token Based Authentication</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
