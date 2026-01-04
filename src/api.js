const API_BASE_URL = "https://truth-checker-backend.onrender.com";

export async function checkClaim(claim) {
  const response = await fetch(`${API_BASE_URL}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ claim })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}
