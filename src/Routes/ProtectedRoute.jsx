import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../context/Login";

const ProtectedRoute = ({ children }) => {
  const { decodeToken } = useContext(LoginContext);
  if (
    !decodeToken ||
    (decodeToken.role !== "USER" && decodeToken.role !== "ADMIN")
  ) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
