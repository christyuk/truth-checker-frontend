import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import TruthCheck from "./TruthCheck";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
