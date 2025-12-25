import React, { useState } from "react";
import Login from "./pages/Login";
import TruthCheck from "./pages/TruthCheck";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <div>
      {loggedIn ? (
        <TruthCheck onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
