import axios from "axios";
import Cookies from "js-cookie";
let accessToken = Cookies.get("access_token");
const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = "https://noroffapi.pythonanywhere.com";
axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${accessToken}`;

export default axiosInstance;
