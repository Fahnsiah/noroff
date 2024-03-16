import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ element }) => {
  const token = Cookies.get("access_token");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
