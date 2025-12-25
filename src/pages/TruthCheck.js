import React, { useState } from "react";
import { truthCheck } from "../api";

function TruthCheck({ onLogout }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleCheck = async () => {
    try {
      setError("");
      const data = await truthCheck(text);
      setResult(
        `${data.data.verdict} (confidence: ${data.data.confidence})`
      );
    } catch (err) {
      setResult("");
      setError("Invalid token");
    }
  };

  return (
    <div>
      <h1>Truth Checker</h1>

      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />

      <button onClick={handleCheck}>Check</button>

      {result && <p>{result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <br />
      <button
        onClick={() => {
          localStorage.removeItem("token");
          onLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default TruthCheck;
