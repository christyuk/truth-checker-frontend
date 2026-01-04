import React, { useState } from "react";
import API from "../api";

function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState("");

  const checkTruth = async () => {
    try {
      const res = await API.post("/check", { claim });
      setResult(res.data.result);
    } catch (err) {
      alert("Backend is waking up, please try again in 20 seconds");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Truth Checker</h1>

      <textarea
        rows="4"
        cols="40"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter a claim"
      />

      <br /><br />

      <button onClick={checkTruth}>Check</button>

      <br /><br />

      {result && <strong>Result: {result}</strong>}
    </div>
  );
}

export default TruthCheck;
