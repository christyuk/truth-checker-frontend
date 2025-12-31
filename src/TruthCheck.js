import React, { useState } from "react";
import API from "./api";

export default function TruthCheck() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkTruth = async () => {
    if (!text.trim()) {
      setError("Please enter a statement");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await API.post("/check", { text });
      setResult(res.data);
    } catch (err) {
      setError("Server not reachable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Truth Checker</h1>

      <textarea
        rows="4"
        placeholder="Enter a statement (e.g. Earth is round)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={checkTruth} disabled={loading}>
        {loading ? "Checking..." : "Check"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h3
            className={
              result.verdict === "TRUE"
                ? "true"
                : result.verdict === "FALSE"
                ? "false"
                : ""
            }
          >
            Result: {result.verdict}
          </h3>
          <p>{result.reason}</p>
        </div>
      )}
    </div>
  );
}
