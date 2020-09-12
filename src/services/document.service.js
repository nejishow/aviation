import axios from "axios";
const document = axios.create({
    baseURL: "https://aviation-backend.herokuapp.com", // https://aviation-backend.herokuapp.com

    //baseURL: "http://localhost:3000", // https://aviation-backend.herokuapp.com
});
document.interceptors.request.use((config) => {
    config.headers.common.Authorization =
        "Bearer " + localStorage.getItem("token");
    return config;
});
export default {
    postDocument(doc) {
        return document.post("/document", { params: doc });
    },
    deleteDocument(id) {
        return document.post("/deleteDocument/" + id);
    },
    disableDocument(id) {
        return document.post("/disableDocument/" + id);
    },
    enableDocument(id) {
        return document.post("/enableDocument/" + id);
    },
    getDocuments() {
        return document.get("/documents");
    },
    getPublic() {
        return document.get("/publicDocuments");
    }
};
