import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelViewer from "./pages/components/ModelViewer";
import "./App.css";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route
          path="/contact"
          element={<div className="page">Contact Page</div>}
        />
        <Route
          path="/lookbook"
          element={<div className="page">Lookbook Page</div>}
        />
        <Route
          path="/return-policy"
          element={<div className="page">Return Policy Page</div>}
        />
        <Route
          path="/pre-order-status"
          element={<div className="page">Pre-order Status Page</div>}
        />
        <Route
          path="/3d-view"
          element={<ModelViewer modelPath="/models/ring.obj" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
