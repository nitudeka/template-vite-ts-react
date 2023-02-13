import { showNotification } from "@mantine/notifications";
import axios, { AxiosHeaders } from "axios";
import { apiUrls } from "./apiUrls";
import * as constants from "./constants";

const axiosInstance = axios.create({
  baseURL: constants.apiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(constants.tokenKey);

    if (config.url === apiUrls.auth.login) {
      return config;
    }

    if (config.headers && token) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }

    if (config.pathParams && config.url) {
      Object.keys(config.pathParams).forEach((key) => {
        config.url = config.url?.replace(
          ":" + key,
          config.pathParams![key].toString()
        );
      });
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const req = err.config;

    if (err.response?.status === 401) {
      if (req.url === apiUrls.auth.refreshToken) {
        showNotification({
          message: "Please log in again to continue",
          color: "yellow",
        });
        localStorage.clear();
        return Promise.reject(err);
      }

      try {
        const res = await axiosInstance.get(apiUrls.auth.refreshToken);

        if (res.status === 200) {
          localStorage.setItem(constants.tokenKey, res.data.token);
          req.headers["Authorization"] = "Bearer " + res.data.token;
          return axiosInstance(req);
        }
      } catch {
        return { data: null };
      }
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
