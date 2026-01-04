import axios from "axios";

const API = axios.create({
  baseURL: "https://truth-checker-backend.onrender.com/api",
});

export default API;
