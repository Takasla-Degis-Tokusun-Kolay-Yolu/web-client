import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:6060/categories" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("access_token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
  }
  return req;
});
export const getAllCategories = () => API.get("/");
