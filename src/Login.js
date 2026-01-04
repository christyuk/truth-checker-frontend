import { useEffect } from "react";

function Login({ setIsAuthenticated }) {
  useEffect(() => {
    // AUTO DEMO LOGIN
    const demoToken = "demo-jwt-token";

    localStorage.setItem("token", demoToken);
    setIsAuthenticated(true);
  }, [setIsAuthenticated]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Demo Login</h2>
      <p>Logging in automatically for demo purposes...</p>
    </div>
  );
}

export default Login;
