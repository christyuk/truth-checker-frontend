import axios from "axios";

const API = axios.create({
  baseURL: "https://truth-checker-backend.onrender.com",
});

// 🔐 ALWAYS ATTACH TOKEN (DEMO OR REAL)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
