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
export const createProduct = (formData) => API.post("/", formData);
export const getUserProducts = (userId) => API.get(`/user-products/${userId}`);

export const getOneProductById = (productId) => API.get(`/${productId}`);
export const updateProduct = (productId, formData) => API.patch(`/${productId}`, formData);
export const deleteProduct = (productId) => API.delete(`/${productId}`);