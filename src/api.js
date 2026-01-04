import axios from "axios";

const API_BASE = "https://truth-checker-backend.onrender.com";

export async function checkTruth(text) {
  const res = await axios.post(
    `${API_BASE}/api/truth/check`,
    { text },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
}
