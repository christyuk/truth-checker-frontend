import { useState } from "react";
import Login from "./Login";
import TruthCheck from "./TruthCheck";

function App() {
  const [token, setToken] = useState(null);
  return token ? <TruthCheck /> : <Login onLogin={setToken} />;
}

export default App;
