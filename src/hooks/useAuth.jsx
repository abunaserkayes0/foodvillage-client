import { useContext } from "react";
import AuthProvider from "../Context/AuthProvider";

export default function useAuth() {
  const auth = useContext(AuthProvider);
  return auth;
}
