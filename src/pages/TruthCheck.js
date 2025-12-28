import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkTruth } from "../api";

function TruthCheck() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const data = await checkTruth(text);
      setResult(data);
    } catch (err) {
      alert("Error checking truth");
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div>
      <h1>AI Truth Checker</h1>

      <button onClick={logout}>Logout</button>
      <br /><br />

      <textarea
        rows="6"
        cols="80"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br /><br />

      <button onClick={submit}>Check Truth</button>

      {result && (
        <div style={{ background: "#eaf7ea", padding: "20px", marginTop: "20px" }}>
          <h3>Verdict: {result.verdict}</h3>
          <p>Confidence: {result.confidence}%</p>
          <p><b>Explanation:</b> {result.explanation}</p>
          <p><b>Sources:</b> {result.sources.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default TruthCheck;
