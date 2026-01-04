import { useState } from "react";
import { checkTruth } from "./api";

export default function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);

  async function handleCheck() {
    try {
      const data = await checkTruth(claim);
      setResult(data);
    } catch {
      alert("Unauthorized");
    }
  }

  return (
    <div>
      <h1>AI Truth Checker</h1>
      <input
        placeholder="Enter claim"
        value={claim}
        onChange={e => setClaim(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>

      {result && (
        <div>
          <p><b>{result.verdict}</b></p>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}
