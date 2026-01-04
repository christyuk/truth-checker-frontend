const API_URL = process.env.REACT_APP_API_URL;

export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}

export async function truthCheck(text, token) {
  const res = await fetch(`${API_URL}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ text })
  });

  if (!res.ok) {
    throw new Error("Truth check failed");
  }

  return res.json();
}

