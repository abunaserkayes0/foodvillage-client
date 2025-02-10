import axios from "axios";
import { url } from "../../utils/fetchurl";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: url,
});

export default function useAxios() {
  useEffect(() => {
    return axiosInstance;
  }, []);
}
