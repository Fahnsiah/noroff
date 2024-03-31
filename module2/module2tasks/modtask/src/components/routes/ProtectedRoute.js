import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ element }) => {
  const access = Cookies.get("access");

  return access ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
