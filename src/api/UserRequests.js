import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:6060/users" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("access_token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  }

  return req;
});

export const signIn = (formData) => API.post("/login", formData);

export const signUp = (formData) => API.post("/", formData);

export const updateUser = (formData) => API.patch(`/`, formData);
export const fetchActiveUser = () => API.get("/active");
