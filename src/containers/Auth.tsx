import Layout from "components/Layout";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicPaths, tokenKey } from "utils/constants";
import useStore from "store";

const AuthWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isAuthenticating,
    setIsAuthenticated,
    setIsAuthenticating,
  } = useStore();

  const isPublicPath = useMemo(() => {
    return publicPaths.indexOf(location.pathname) > -1;
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      setIsAuthenticated(true);
    }
    setIsAuthenticating(false);
  }, [setIsAuthenticated, setIsAuthenticating]);

  useEffect(() => {
    if (!isPublicPath && !isAuthenticated && !isAuthenticating) {
      // navigate("/login");
    } else if (isPublicPath && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isAuthenticating, navigate, isPublicPath]);

  if (isPublicPath) return <>{props.children}</>;

  if (isAuthenticating) return null;

  return (
    <div>
      <Layout>{props.children}</Layout>
    </div>
  );
};

export default AuthWrapper;
