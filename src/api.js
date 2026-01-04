const API_BASE_URL = "https://truth-checker-backend.onrender.com";

export async function checkClaim(claim) {
  const response = await fetch(`${API_BASE_URL}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ claim })
  });

  const text = await response.text();

  // If backend accidentally returns HTML
  if (text.startsWith("<")) {
    throw new Error(
      "Frontend received HTML instead of JSON. API URL is incorrect."
    );
  }

  const data = JSON.parse(text);

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}
