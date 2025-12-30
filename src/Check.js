import { useState } from "react";
import API from "./api";

function Check() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const checkTruth = async () => {
    const token = localStorage.getItem("token");
    const res = await API.checkTruth(text, token);
    setResult(res);
  };

  return (
    <div>
      <h1>AI Truth Checker</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={checkTruth}>Check Truth</button>

      {result && (
        <div>
          <h3>Verdict: {result.verdict}</h3>
          <p>Confidence: {result.confidence}</p>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Check;
