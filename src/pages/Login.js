const login = async () => {
  try {
    const res = await API.post("/api/auth/login", {
      username,
      password
    });

    localStorage.setItem("loggedIn", "true");
    navigate("/check");
  } catch (err) {
    alert("Login failed");
  }
};
