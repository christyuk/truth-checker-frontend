import React, { useState } from "react";
import { checkTruth } from "./api";

function TruthCheck() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const data = await checkTruth(claim);
    setResult(data);
  };

  return (
    <div>
      <h1>Truth Checker</h1>

      <input
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter a claim"
      />
      <button onClick={handleCheck}>Check</button>

      {result && (
        <>
          <h3>Result: {result.result}</h3>
          <p>{result.explanation}</p>
        </>
      )}
    </div>
  );
}

export default TruthCheck;
