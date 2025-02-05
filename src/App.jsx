import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelViewer from "./pages/components/ModelViewer";
import StorePage from "./pages/StorePage";
import "./App.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AppProvider } from "./context/AppContext";

// Navbar Component
const Navbar = () => {
  return (
    <div className="flex navbar space-between navbar">
      <div
        className="column justify-center gap-20"
        style={{
          flex: 2,
        }}
      >
        <div className="flex gap-20">
          <span className="nav-links">STORE</span>
          <span className="nav-links">CONTACT</span>
          <span className="nav-links">LOOKBOOK</span>
        </div>

        <div className="flex gap-20">
          <span className="nav-links">RETURN POLICY</span>
          <span className="nav-links">PRE_ORDER STATUS</span>
        </div>
      </div>
      <div>
        <ModelViewer type="navbar" />
      </div>

      <div
        className="column justify-center items-end"
        style={{
          flex: 2,
        }}
      >
        <div className="flex items-center gap-20">
          <FaSearch height={20} cursor={"pointer"} /> {/* Search icon */}
          <FaShoppingCart height={20} cursor={"pointer"} /> {/* Cart icon */}
        </div>
      </div>
    </div>
  );
};

// App Component
function App() {
  const location = useLocation(); // Get current path

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <AppProvider>
        {location.pathname !== "/" && <Navbar />}
        {location.pathname == "/" ? <ModelViewer /> : null}
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
      </AppProvider>
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
