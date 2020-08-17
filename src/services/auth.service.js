import axios from "axios";
const auth = axios.create({
  baseURL: "https://aviation-backend.herokuapp.com", // https://aviation-backend.herokuapp.com
});
auth.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {
  signIn(user) {
    return auth.post("/login", user);
  },
};
