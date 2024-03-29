import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ element }) => {
  const token = Cookies.get("token");

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
