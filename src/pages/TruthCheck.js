import { useState } from "react";
import { checkTruth } from "../api";

function TruthCheck() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const data = await checkTruth(text);
      setResult(data);
    } catch (err) {
      alert("Failed to check truth");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>AI Truth Checker</h1>

      <textarea
        rows="6"
        cols="80"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={submit}>
        {loading ? "Checking..." : "Check Truth"}
      </button>

      {result && (
        <div style={{ background: "#eaf7ea", padding: "20px", marginTop: "20px" }}>
          <h3>Verdict: {result.verdict}</h3>
          <p>Confidence: {result.confidence}%</p>

          <div style={{ background: "#ddd", height: "10px" }}>
            <div
              style={{
                width: `${result.confidence}%`,
                height: "10px",
                background: "green"
              }}
            />
          </div>

          <p><b>Explanation:</b> {result.explanation}</p>
          <p><b>Sources:</b> {result.sources.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default TruthCheck;
