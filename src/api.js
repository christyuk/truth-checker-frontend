import axios from "axios";

const API = axios.create({
  baseURL: "https://YOUR-BACKEND.onrender.com",
});

export const login = async (username, password) => {
  const res = await API.post("/api/login", {
    username,
    password,
  });
  return res.data;
};

export const checkTruth = async (claim) => {
  const token = localStorage.getItem("token");

  const res = await API.post(
    "/api/check",
    { claim },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
