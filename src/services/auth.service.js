import axios from "axios";
const auth = axios.create({
  baseURL: "https://aviation-backend.herokuapp.com", // https://aviation-backend.herokuapp.com

  //baseURL: "http://localhost:3000", // https://aviation-backend.herokuapp.com

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
  getUser(token, id) {
    return auth.post("/getMe", {
      params: { token, id }
    });
  },
  logout() {
    return auth.post("/logout").then(() => {
      this.$router.push({ path: '/' })
    }).catch(() => {
      this.$router.push({ path: '/' })
    });
  },
};
