import { useState } from "react";

export default function TruthCheck() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkTruth = async () => {
    if (!text.trim()) {
      alert("Please enter a claim");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "https://truth-checker-backend.onrender.com/api/truth/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ text })
        }
      );

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert("Backend not ready. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>AI Truth Checker</h1>

      <input
        type="text"
        placeholder="Enter claim"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={checkTruth} disabled={loading}>
        {loading ? "Checking..." : "Check"}
      </button>

      {result && (
        <div>
          <h2>{result.verdict}</h2>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}
