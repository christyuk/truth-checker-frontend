import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // LOGIN
  const login = async () => {
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  // TRUTH CHECK
  const checkTruth = async () => {
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/truth/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Truth Checker</h1>

      {!token && (
        <>
          <h2>Login</h2>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={login}>Login</button>
        </>
      )}

      {token && (
        <>
          <hr />
          <h2>Truth Check</h2>
          <input
            placeholder="Enter claim"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button onClick={checkTruth}>Check</button>

          {result && (
            <div style={{ marginTop: "20px" }}>
              <p><b>Verdict:</b> {result.verdict}</p>
              <p><b>Confidence:</b> {result.confidence}</p>
              <p><b>Explanation:</b> {result.explanation}</p>
            </div>
          )}
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
