import axios from "axios";
import { strapiURL } from "./variableConfig";

const axiosInstance = axios.create({
  baseURL: strapiURL,
});
axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
