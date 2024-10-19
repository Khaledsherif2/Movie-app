import { createContext } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  let token = cookies.token;
  let decodeToken = null;

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
