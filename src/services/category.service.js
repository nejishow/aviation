import axios from "axios";
const category = axios.create({
  baseURL: "http://localhost:3000", // https://aviation-backend.herokuapp.com
});
category.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {
  getCategories() {
    return category.get("/allCategory/");
  },
  getMenu(id) {
    console.log(id);
    return category.get("/menu/" + id);
  },
  getMenuS(id) {
    return category.get("/menuS/" + id);
  },
};
