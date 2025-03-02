import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./styles/ProductPage.css";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!product && id) {
      // If no product in state, try to fetch it using the ID
      // For now, we'll use the products from StorePage
      // In a real app, this would be an API call
      const foundProduct = products.find((p) => p.product_id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError("Product not found");
        setTimeout(() => navigate("/store"), 2000);
      }
    }
    setLoading(false);
  }, [id, product, navigate]);

  useEffect(() => {
    if (!product) {
      navigate("/store");
      return;
    }
    // Set initial size if available
    if (product.available_sizes && product.available_sizes.length > 0) {
      setSelectedSize(product.available_sizes[0].size);
    }
  }, [product, navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  // Helper function to get full image path
  const getImagePath = (imgUrl) => {
    // If the URL is absolute (starts with http or /), use it as is
    if (imgUrl.startsWith("http") || imgUrl.startsWith("/")) {
      return imgUrl;
    }
    // Otherwise, prepend the public URL
    return `${process.env.PUBLIC_URL}${imgUrl}`;
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img
              src={getImagePath(product.img_url)}
              alt={product.name}
              onError={(e) => {
                e.target.src = "/placeholder.jpg"; // Fallback image
                e.target.onerror = null;
              }}
            />
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-price">
            <div className="price">${product.price.toFixed(2)} USD</div>
            <div className="tax-info">Tax included.</div>
          </div>

          <div className="size-selection">
            <div className="section-title">Size</div>
            <div className="size-buttons">
              {product.available_sizes.map(({ size }) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={
                    selectedSize === size ? "size-button active" : "size-button"
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selection">
            <div className="section-title">Quantity</div>
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <div className="quantity-display">{quantity}</div>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="size-chart-button">SIZE CHART</button>

          <div className="shipping-info">
            <div className="indicator"></div>
            Shipping in 3-5 business days
          </div>

          <div className="stock-status">
            Currently {Object.values(product.stock).reduce((a, b) => a + b, 0)}{" "}
            items are in stock!
          </div>

          <button className="add-to-cart-button">
            ADD TO CART
            <span className="arrow-right"></span>
          </button>

          <div className="navigation">
            <button className="nav-button">
              <span className="arrow-left"></span>
              Previous
            </button>
            <button className="nav-button">
              Next
              <span className="arrow-right"></span>
            </button>
          </div>

          <div className="expandable-sections">
            <div className="section">
              <button
                onClick={() => toggleSection("description")}
                className="section-header"
              >
                <span>DESCRIPTION</span>
                <span
                  className={
                    activeSection === "description" ? "arrow up" : "arrow down"
                  }
                ></span>
              </button>
              {activeSection === "description" && (
                <div className="section-content">
                  {product.description}
                  <br />
                  Material: {product.material}
                </div>
              )}
            </div>

            <div className="section">
              <button
                onClick={() => toggleSection("sizing")}
                className="section-header"
              >
                <span>SIZING</span>
                <span
                  className={
                    activeSection === "sizing" ? "arrow up" : "arrow down"
                  }
                ></span>
              </button>
              {activeSection === "sizing" && (
                <div className="section-content">
                  Sizing information goes here...
                </div>
              )}
            </div>

            <div className="section">
              <button
                onClick={() => toggleSection("shipping")}
                className="section-header"
              >
                <span>SHIPPING INFORMATION</span>
                <span
                  className={
                    activeSection === "shipping" ? "arrow up" : "arrow down"
                  }
                ></span>
              </button>
              {activeSection === "shipping" && (
                <div className="section-content">
                  Shipping information goes here...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
