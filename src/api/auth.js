import api from "./index";

export const login = (data) => {
  return api.post("api/login", data);
};

export const register = (data) => {
  return api.post("api/register", data);
};

export const logout = (data) => {
  return api.post("api/logout", data, { headers: { Authorization: `Bearer ${data.token}` } });
};
