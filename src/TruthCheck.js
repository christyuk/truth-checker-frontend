import { useEffect, useState } from "react";
import { checkClaim } from "./api";

function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Wake backend
  useEffect(() => {
    fetch("https://truth-checker-backend.onrender.com/health")
      .catch(() => {});
  }, []);

  const handleCheck = async () => {
    setLoading(true);
    setResult(null);

    try {
      const data = await checkClaim(claim);
      setResult(data);
    } catch (err) {
      setResult({
        error: "Backend is running. Please wait 10–20 seconds and retry."
      });
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>AI Truth Checker</h2>

      <input
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter a claim"
        style={{ width: "300px", marginRight: "10px" }}
      />

      <button onClick={handleCheck} disabled={loading}>
        {loading ? "Checking..." : "Check"}
      </button>

      {result && (
        <pre style={{ marginTop: "20px" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default TruthCheck;
