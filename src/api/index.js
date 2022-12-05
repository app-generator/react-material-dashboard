import axios from "axios";
import { API_SERVER } from "config/constants";

const api = axios.create({
  baseURL: API_SERVER,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => Promise.resolve(config),
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => Promise.reject(error)
);

export default api;
