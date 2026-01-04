import React, { useState } from "react";
import API from "../api";

function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkTruth = async () => {
    if (!claim.trim()) {
      alert("Please enter a claim");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/check", { claim });
      setResult(res.data.result || res.data.message);
    } catch (err) {
      console.error(err);
      alert("Backend is waking up. Please try again in 30 seconds.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Truth Checker</h1>

      <textarea
        rows="4"
        cols="50"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter a claim"
      />

      <br /><br />

      <button onClick={checkTruth}>
        {loading ? "Checking..." : "Check"}
      </button>

      {result && (
        <>
          <br /><br />
          <strong>Result:</strong>
          <p>{result}</p>
        </>
      )}
    </div>
  );
}

export default TruthCheck;
