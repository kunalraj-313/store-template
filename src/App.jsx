import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelViewer from "./pages/components/ModelViewer";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import "./App.css";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { AppProvider, useAppContext } from "./context/AppContext";
import { useState } from "react";
import CartSidebar from "./pages/components/CartSidebar";
import AdminPage from "./pages/AdminPage";

// Navbar Component
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemCount } = useAppContext();

  return (
    <>
      <div className="flex navbar space-between">
        <div
          className="hamburger-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div
          className={`nav-links-container ${isMobileMenuOpen ? "active" : ""}`}
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? "auto" : "none",
          }}
        >
          <div className="column gap-20">
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
        </div>

        <div className="logo-container">
          <ModelViewer type="navbar" />
        </div>

        <div className="cart-search-container">
          <FaSearch className="search-icon" />
          <div className="cart-icon-container">
            <FaShoppingCart onClick={() => setIsCartOpen(true)} />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </div>
        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
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
      {location.pathname !== "/" && <Navbar />}
      {location.pathname == "/" ? <ModelViewer /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
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
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

// Wrap the App component with Router and AppProvider
function AppWithRouter() {
  return (
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  );
}

export default AppWithRouter;
