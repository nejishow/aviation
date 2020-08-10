import axios from "axios";
const bannerAdmin = axios.create({
    baseURL: "http://localhost:3000"
});
bannerAdmin.interceptors.request.use(config => {
    config.headers.common.Authorization =
        "Bearer " + localStorage.getItem("token");
    return config;
});
export default {
    postBanner(banner) {
        return bannerAdmin.post("/banner", {
            params: banner
        });
    },
    getBanners() {
        return bannerAdmin.get("/bannersAdmin");
    },
    changeBanner(id) {
        return bannerAdmin.post("/banner/" + id);
    },
    getCategories() {
        return bannerAdmin.get("/allCategory/");

    },
    getMenu(name) {
        return bannerAdmin.get("/menu/" + name);

    },
    getMenuS(name) {
        console.log(name);
        return bannerAdmin.get("/menuS/" + name);

    }
};
