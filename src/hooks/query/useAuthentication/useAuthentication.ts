import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { loginService, logOutService } from "services/authService";
import useStore from "store";
import { tokenKey } from "utils/constants";
import { authKeys } from "./keys";

function useAuthentication() {
  const key = authKeys.auth;
  const { setIsAuthenticated } = useStore();

  const { mutateAsync: _logIn, isLoading: logginIn } = useMutation(
    key,
    loginService
  );

  const { mutateAsync: _logOut, isLoading: logginOut } = useMutation(
    key,
    logOutService
  );

  async function logIn(payload: Parameters<typeof loginService>[0]) {
    try {
      const { data } = await _logIn(payload);
      localStorage.setItem(tokenKey, data.token);
      setIsAuthenticated(true);
    } catch (err: any) {
      showNotification({
        message: err.response.data.message,
        color: "red",
      });
    }
  }

  async function logOut() {
    try {
      await _logOut();
      localStorage.clear();
      setIsAuthenticated(false);
    } catch (err: any) {
      showNotification({
        message: "error logging out",
        color: "red",
      });
    }
  }

  return {
    logIn,
    logginIn,
    logOut,
    logginOut,
  };
}

export default useAuthentication;
