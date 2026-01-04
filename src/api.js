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

  return response.json();
}
