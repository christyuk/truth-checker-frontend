import { useState } from "react";

function TruthCheck() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const submit = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/truth/check`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      }
    );

    const data = await res.json();
    setResult(data);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>AI Truth Checker</h1>
      <button onClick={logout}>Logout</button>
      <br /><br />

      <textarea
        rows="6"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />

      <button onClick={submit}>Check Truth</button>

      {result && (
        <div style={{ background: "#eaf7ea", padding: "20px", marginTop: "20px" }}>
          <h3>Verdict: {result.verdict}</h3>
          <p>Confidence: {result.confidence}%</p>
          <p>Explanation: {result.explanation}</p>
          <p>Sources: {result.sources.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default TruthCheck;
