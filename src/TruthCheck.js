import React, { useState } from "react";

function TruthCheck() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const checkTruth = async () => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    if (!token) {
      alert("Please login first");
      return;
    }

    const res = await fetch("http://localhost:5000/api/truth/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    console.log("API RESPONSE:", data);

    setResult(data);
  };

  return (
    <div>
      <h2>Truth Check</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter claim"
      />
      <br />

      <button onClick={checkTruth}>Check</button>

      {result && (
        <div>
          <p><b>Verdict:</b> {result.verdict}</p>
          <p><b>Confidence:</b> {result.confidence}</p>
          <p><b>Explanation:</b> {result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default TruthCheck;
