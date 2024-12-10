import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const userToken = localStorage.getItem("userAccessToken");
  if (!userToken) {
    toast.error("You need to Login first");
    return <Navigate to={"/login"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
