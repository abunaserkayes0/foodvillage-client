import axios from "axios";
import { url } from "../../utils/fetchurl";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
}
