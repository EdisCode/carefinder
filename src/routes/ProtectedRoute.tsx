import useAuth from "../context/auth-context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
