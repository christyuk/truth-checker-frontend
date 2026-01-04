import React, { useState } from "react";
import API from "./api";

function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    try {
      const res = await API.post(
        "/api/truth/check",
        { text: claim },
        {
          headers: {
            "x-demo": "true", // ✅ DEMO MODE
          },
        }
      );

      setResult(res.data);
    } catch (err) {
      alert("Backend not ready. Please try again.");
    }
  };

  return (
    <div>
      <h1>AI Truth Checker</h1>

      <input
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter claim"
      />

      <button onClick={handleCheck}>Check</button>

      {result && (
        <div>
          <h3>{result.verdict}</h3>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default TruthCheck;
