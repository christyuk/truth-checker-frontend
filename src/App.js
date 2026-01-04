import { useState } from "react";
import Login from "./Login";
import TruthCheck from "./TruthCheck";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return loggedIn ? (
    <TruthCheck />
  ) : (
    <Login onLogin={() => setLoggedIn(true)} />
  );
}

export default App;
