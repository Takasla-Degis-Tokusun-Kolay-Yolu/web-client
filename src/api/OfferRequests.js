import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:6060/offers" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("access_token")) {
        req.headers.Authorization = `Bearer ${localStorage.getItem(
            "access_token"
        )}`;
    }
    return req;
});


export const createOffer = (formData) => API.post("/", formData);

export const fetchActiveUserIncomingOffers = (userId) => API.get(`/active-user-incoming-offers/${userId}`);
