import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import TruthCheck from "./TruthCheck";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <HashRouter>
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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
