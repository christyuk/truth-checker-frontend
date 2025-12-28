// src/api.js

const API_BASE = process.env.REACT_APP_API_URL;

export async function loginUser(username, password) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}

export async function checkTruth(text) {
  const res = await fetch(`${API_BASE}/api/truth/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error("Truth check failed");
  }

  return res.json();
}
