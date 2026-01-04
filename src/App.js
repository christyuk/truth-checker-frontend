import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TruthCheck from "./pages/TruthCheck";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Demo route – opens directly */}
        <Route path="/" element={<TruthCheck />} />

        {/* Keep these for code completeness (not required for demo) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
