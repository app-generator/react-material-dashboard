import api from "./index";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) return user.token;

  throw new Error("Auth token required!");
};

export const logout = (data) => {
  return api.post("api/logout", data, { headers: { Authorization: `Bearer ${getToken()}` } });
};
