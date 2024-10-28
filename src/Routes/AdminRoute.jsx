import { useContext } from "react";
import { Navigate } from "react-router";
import { LoginContext } from "../context/Login";

const AdminRoute = ({ children }) => {
  const { decodeToken } = useContext(LoginContext);
  if (!decodeToken || !(decodeToken.role === "ADMIN")) {
    return <Navigate to="/notAuthorized" replace />;
  }
  return children;
};

export default AdminRoute;
