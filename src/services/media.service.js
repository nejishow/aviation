import axios from "axios";
const media = axios.create({
    baseURL:process.env.VUE_APP_BACKEND

  });
media.interceptors.request.use((config) => {
    config.headers.common.Authorization =
        "Bearer " + localStorage.getItem("token");
    return config;
});
export default {
    postbanner(banner) {
        return media.post("/banner", { params: banner });
    },
    deletebanner(id) {
        return media.post("/deleteBanner/" + id);
    },
    disablebanner(id) {
        return media.post("/disableBanner/" + id);
    },
    enableBanner(id) {
        return media.post("/enableBanner/" + id);
    },
    getBanner() {
        return media.get("/banners");
    },
    postnews(news) {
        return media.post("/news", { params: news });
    },
    deleteNews(id) {
        return media.post("/deleteNews/" + id);
    },
    modifyNews(news) {
        return media.post("/modifyNews", { params: news });
    },
    enableNews(id) {
        return media.post("/enableNews/" + id);
    },
    getNews() {
        return media.get("/news");
    },

};
