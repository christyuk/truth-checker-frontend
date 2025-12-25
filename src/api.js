const API_BASE = "http://localhost:3000"; 
// later change to Render URL

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

export async function truthCheck(text) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/api/v2/truth/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error("Invalid token");
  }

  return res.json();
}
