import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p className="text-center font-bold text-7xl">...Loading</p>;
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
