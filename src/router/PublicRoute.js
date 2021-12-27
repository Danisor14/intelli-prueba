import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const logged = useSelector((state) => state.device.logged); 

  return logged ? <Navigate to="/" /> : children;
};
