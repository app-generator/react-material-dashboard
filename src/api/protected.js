import { BASE } from "config/constants";
import api from "./index";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) return user.token;

  throw new Error("Auth token required!");
};

export const logout = (data) => api.post(`${BASE}/logout`, data, { headers: { Authorization: `Bearer ${getToken()}` } })
