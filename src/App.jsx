import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelViewer from "./pages/components/ModelViewer";
import StorePage from "./pages/StorePage";
import "./App.css";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

// Navbar Component
const Navbar = () => {
  return (
    <div className="column items-start navbar">
      <div className="flex">
        <span className="">STORE</span>
        <span className="">CONTACT</span>
        <span className="">LOOKBOOK</span>
     
      </div>

      <div className="flex">
      <span className="">RETURN POLICY</span>
      <span className="">PRE_ORDER STATUS</span>
      </div>


      <div className="flex ">
      <FaSearch />  {/* Search icon */}
      <FaShoppingCart />  {/* Cart icon */}
      </div>
    </div>
  );
};

// App Component
function App() {
  const location = useLocation(); // Get current path

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <ModelViewer/>

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
    </div>
   
  );
}

// Wrap the App component with Router
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
