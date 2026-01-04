import { useState } from "react";
import { checkTruth } from "./api";

export default function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);

  async function handleCheck() {
    try {
      const data = await checkTruth(claim);
      setResult(data);
    } catch (err) {
      alert("Backend not ready. Please try again.");
    }
  }

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
        <div style={{ marginTop: "20px" }}>
          <h3>{result.verdict}</h3>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}
