import api from "./index";

export const login = (data) => {
  return api.post("users/login", data);
};

export const register = (data) => {
  return api.post("users/register", data);
};

export const logout = (data) => {
  return api.post("users/logout", data, { headers: { Authorization: `Bearer ${data.token}` } });
};
