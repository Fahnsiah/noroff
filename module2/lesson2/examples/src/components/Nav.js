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
          <Link to="/reducer">useReducer</Link>
        </li>
        <li className="list-group-item">
          <Link to="/callback">useCallback</Link>
        </li>
        <li className="list-group-item">
          <Link to="/usememo">useMemo</Link>
        </li>
        <li className="list-group-item">
          <Link to="/useref">useRef Access D</Link>
        </li>
        <li className="list-group-item">
          <Link to="/previousvalue">useRef Previous Value</Link>
        </li>
        <li className="list-group-item">
          <Link to="/customhook">Custom Hooks</Link>
        </li>
        <li className="list-group-item">
          <Link to="/inputform">Input Form</Link>
        </li>
        <li className="list-group-item">
          <Link to="/uselayouteffect">useLayoutEffect</Link>
        </li>
        <li className="list-group-item">
          <Link to="/useimperativehandle">useImperationHandle</Link>
        </li>
        <li className="list-group-item">
          <Link to="/randomnumber">Random Numbers</Link>
        </li>
        <li className="list-group-item">
          <Link to="/containerpresentation">Container and Presentation</Link>
        </li>
        <li className="list-group-item">
          <Link to="/statelifting">State Lifting</Link>
        </li>
        <li className="list-group-item">
          <Link to="/propdrilling">Prop Drilling</Link>
        </li>
        <li className="list-group-item">
          <Link to="/hoc">HOC</Link>
        </li>
        <li className="list-group-item">
          <Link to="/tokenbased">Token Based Authentication</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
