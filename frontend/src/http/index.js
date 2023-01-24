import axios, { defaults } from "axios";

export const API_AUTH_URL = "http://localhost:8082/api/auth/";
export const API_DATA_URL = "http://localhost:8082/api/data/";

const api = axios.create({
  withCredentials: true,
  url: API_AUTH_URL,
});

// config - instance of axios
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default api;
