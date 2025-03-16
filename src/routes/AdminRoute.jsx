import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth/AuthContext";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Prevents premature redirect
  }

  return user?.role === "admin" ? children : <Navigate to="/not-authorized" />;
};

export default AdminRoute;
