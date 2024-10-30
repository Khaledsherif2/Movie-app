import { createContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const location = useLocation();

  let token = cookies.token;
  let decodeToken = null;

  useEffect(() => {
    if (!token && location.pathname !== "/" && location.pathname !== "*") {
      navigate("/login");
    }
  }, [token, navigate, location.pathname]);

  if (token) {
    try {
      decodeToken = jwtDecode(token);
    } catch (e) {
      removeCookie("token");
      return null;
    }
  }

  return (
    <LoginContext.Provider
      value={{ cookies, setCookie, removeCookie, token, decodeToken }}
    >
      {children}
    </LoginContext.Provider>
  );
};
