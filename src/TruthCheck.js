import { useState } from "react";
import { truthCheck } from "./api";

export default function TruthCheck() {
  const [text, setText] = useState("");
  const [res, setRes] = useState(null);

  const check = async () => {
    const r = await truthCheck(text);
    setRes(r);
  };

  return (
    <div>
      <h2>Truth Checker</h2>
      <input placeholder="Enter text" onChange={e => setText(e.target.value)} />
      <button onClick={check}>Check</button>

      {res && (
        <div>
          <p>Verdict: {res.verdict ? "True" : "False"}</p>
          <p>Confidence: {res.confidence}</p>
          <p>{res.explanation}</p>
        </div>
      )}
    </div>
  );
}
