import axios from "axios";
import {message} from "antd";

const API = axios.create({ baseURL: "http://localhost:6060/users" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("access_token")) {
    req.headers.Authorization = localStorage.getItem("access_token");
  }

  return req;
});

export const signIn = (formData) => API.post("/login", formData);

export const signUp = (formData) => API.post("/", formData);
