import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // 🔴 VERY IMPORTANT

    setError("");

    try {
      const res = await API.post("/login", {
        username,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/check"); // 🔴 REDIRECT
      } else {
        setError("Login failed");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
