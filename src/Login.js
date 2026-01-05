import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://truth-checker-backend.onrender.com";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();

      // ✅ Save token
      localStorage.setItem("token", data.token);

      // ✅ Go to truth checker
      navigate("/check");
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>

      <p><b>Demo Login</b></p>
      <p>Username: <b>test</b></p>
      <p>Password: <b>test123</b></p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Login;
