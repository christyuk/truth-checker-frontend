import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TruthCheck from "./pages/TruthCheck";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public demo page */}
        <Route path="/" element={<TruthCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
