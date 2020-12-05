import axios from "axios";
const category = axios.create({
  baseURL:process.env.VUE_APP_BACKEND

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
