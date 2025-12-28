import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import TruthCheck from "./pages/TruthCheck";
import ProtectedRoute from "./ProtectedRoute";

function App() {
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

export default App;
