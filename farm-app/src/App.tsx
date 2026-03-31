import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FarmsPage } from "./features/farms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/farms" />} />
        <Route path="/farms" element={<FarmsPage />} />
      </Routes>
    </Router>
  );
}

export default App;