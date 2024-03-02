import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/customstyle">Inline Style</Link>
        </li>

        <li>
          <Link to="/externalstyle">External File Style</Link>
        </li>

        <li>
          <Link to="/jstyle">JS Style</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
