export async function checkClaim(claim) {
  const response = await fetch(
    "https://truth-checker-backend.onrender.com/check",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ claim })
    }
  );

  const text = await response.text();

  if (text.startsWith("<")) {
    throw new Error("Still calling frontend instead of backend");
  }

  return JSON.parse(text);
}
