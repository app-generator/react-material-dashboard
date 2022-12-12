import { BASE } from "config/constants";
import api from "./index";

export const login = (data) => api.post(`${BASE}/login`, data);

export const register = (data) => api.post(`${BASE}/register`, data);
