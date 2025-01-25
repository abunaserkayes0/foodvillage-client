import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivetRoute({ children }) {
  const { pathname } = useLocation();

  const { user } = useAuth();
  return !user ? <Navigate to="/login" state={pathname || "/"} /> : children;
}
