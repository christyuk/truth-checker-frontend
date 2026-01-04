const API_URL = process.env.REACT_APP_API_URL;

/* LOGIN */
export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

/* CHECK TRUTH */
export async function checkTruth(claim) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ claim })
  });

  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
}
