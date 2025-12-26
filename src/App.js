import { useState } from "react";
import Login from "./pages/Login";
import TruthCheck from "./pages/TruthCheck";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return <TruthCheck />;
}

export default App;
