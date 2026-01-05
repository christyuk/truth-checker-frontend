import { useState } from "react";
import { login } from "./api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token);
      navigate("/check");
    } catch {
      setError("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <p><b>Demo Login</b></p>
      <p>Username: test</p>
      <p>Password: test123</p>

      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
