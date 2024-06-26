// AuthContext.js
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/AxiosInstance";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const login = async (username, password) => {
    Cookies.remove("access_token");
    await axiosInstance
      .post("/login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        let resp = response.data;
        Cookies.set("access_token", resp.access);
        Cookies.set("refresh_token", resp.refresh);
        // alert(resp.access);
        setUser(username);
        navigate("/");
      })
      .catch((error) => {
        alert("Login error: " + error);
      });
  };

  const logout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
