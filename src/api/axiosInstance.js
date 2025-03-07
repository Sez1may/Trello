import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://2d1344c1e724b873.mokky.dev",
  headers: {
    Accept: "application/json",
  },
});
