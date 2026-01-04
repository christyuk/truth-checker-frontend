import { useState } from "react";
import { checkClaim } from "./api";

function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    try {
      const data = await checkClaim(claim);
      setResult(data);
    } catch (e) {
      setResult({ error: "Error connecting to backend" });
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>AI Truth Checker</h2>

      <input
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter a claim"
      />

      <button onClick={handleCheck}>Check</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default TruthCheck;
