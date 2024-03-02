import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profile/Mark">Visit Mark's Profile</Link>
        </li>

        <li>
          <Link to="/profile/Sarah">Visit Sarah's Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
