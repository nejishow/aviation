import axios from "axios";
const category = axios.create({
  baseURL: "https://aviation-backend.herokuapp.com", // https://aviation-backend.herokuapp.com

  // baseURL: "http://localhost:3000", // https://aviation-backend.herokuapp.com
});
category.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {
  getCategories() {
    return category.get("/allCategory");
  },
  getSubCategoryOne() {
    return category.get("/allSubCategoryOne");
  },
  getSubCategoryTwo() {
    return category.get("/allSubCategoryTwo");
  },
  getMenu(id) {
    return category.get("/menu/" + id);
  },
  getMenuS(id) {
    return category.get("/menuS/" + id);
  },
};
