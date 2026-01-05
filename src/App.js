import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import TruthCheck from "./TruthCheck";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/check"
          element={
            <ProtectedRoute>
              <TruthCheck />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
