import axios from "axios";

const API = axios.create({
  baseURL: "https://truth-checker-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
