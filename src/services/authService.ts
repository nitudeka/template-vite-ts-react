import axiosInstance from "utils/api";
import { apiUrls } from "utils/apiUrls";

type LoginRequestType = {
  email: string;
  password: string;
};

type LoginResponseType = {
  token: string;
};

export async function loginService(payload: LoginRequestType) {
  return axiosInstance.post<LoginResponseType>(apiUrls.auth.login, payload);
}

export async function logOutService() {
  return axiosInstance.post(apiUrls.auth.logout);
}
