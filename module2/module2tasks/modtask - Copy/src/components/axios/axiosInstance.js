import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: "https://noroffapi.pythonanywhere.com/",
  timeout: 5000, // Timeout after 5 seconds
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage or any other storage mechanism
    const token = Cookies.get("access");
    // If token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
