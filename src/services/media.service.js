import axios from "axios";
const media = axios.create({
    baseURL: "https://aviation-backend.herokuapp.com", // https://aviation-backend.herokuapp.com

    //baseURL: "http://localhost:3000", // https://aviation-backend.herokuapp.com
});
media.interceptors.request.use((config) => {
    config.headers.common.Authorization =
        "Bearer " + localStorage.getItem("token");
    return config;
});
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        bodyAttrs: {
            class: ['dark-mode', 'mobile']
        },
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            'http-equiv': "Content-Type",
            content: "text/html; charset=utf-8"
        },

        ]
    },
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
    disableNews(id) {
        return media.post("/disableNews/" + id);
    },
    enableNews(id) {
        return media.post("/enableNews/" + id);
    },
    getNews() {
        return media.get("/news");
    },

};
