const API_BASE = "https://truth-checker-backend.onrender.com";

export async function checkTruth(claim) {
  const res = await fetch(`${API_BASE}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ claim })
  });

  if (!res.ok) {
    throw new Error("Backend not ready");
  }

  return res.json();
}
