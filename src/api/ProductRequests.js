import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:6060/products" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("access_token")) {
        req.headers.Authorization = `Bearer ${localStorage.getItem(
            "access_token"
        )}`;
    }
    return req;
});

export const getAllProducts = () => API.get("/");