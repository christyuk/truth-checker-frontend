import { useState } from "react";
import { checkTruth } from "../api";
import { useNavigate } from "react-router-dom";

function TruthCheck() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleCheck = async () => {
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

      <button onClick={logout} style={{ float: "right" }}>
        Logout
      </button>

      <textarea
        rows="6"
        cols="80"
        placeholder="Enter a claim"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button onClick={handleCheck}>Check Truth</button>

      {result && (
        <div style={{ background: "#e8f5e9", padding: "20px", marginTop: "20px" }}>
          <h3>
            Verdict:{" "}
            <span style={{ color: result.verdict === "TRUE" ? "green" : "red" }}>
              {result.verdict}
            </span>
          </h3>

          <p>Confidence: {result.confidence}%</p>

          <div
            style={{
              background: "#ddd",
              height: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                background: "green",
                height: "10px",
                width: `${result.confidence}%`,
              }}
            />
          </div>

          <p>
            <b>Explanation:</b> {result.explanation}
          </p>

          <p>
            <b>Sources:</b> {result.sources.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default TruthCheck;
