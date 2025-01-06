import { useState } from 'react';
import './styles/ProductPage.css';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img src="placeholder.jpg" alt="T ZIP UP HOODIE" />
          </div>
          <div className="thumbnail-container">
            <div className="thumbnail">
              <img src="placeholder-thumb1.jpg" alt="Front view" />
            </div>
            <div className="thumbnail">
              <img src="placeholder-thumb2.jpg" alt="Back view" />
            </div>
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-title">T ZIP UP HOODIE</h1>
          
          <div className="product-price">
            <div className="price">$55.00 USD</div>
            <div className="tax-info">Tax included.</div>
          </div>

          <div className="size-selection">
            <div className="section-title">Size</div>
            <div className="size-buttons">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? 'size-button active' : 'size-button'}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selection">
            <div className="section-title">Quantity</div>
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
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
            Currently 22 items are in stock!
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
              <button onClick={() => toggleSection('description')} className="section-header">
                <span>DESCRIPTION</span>
                <span className={activeSection === 'description' ? 'arrow up' : 'arrow down'}></span>
              </button>
              {activeSection === 'description' && (
                <div className="section-content">
                  - 500 GSM, 100% COTTON FLEECE- COMFY
                  <br />
                  BOXY FIT-LARGE SEAMLESS HOOD- JUMBO DTG
                  <br />
                  PRINTS- SUBTLE SUN FADE
                </div>
              )}
            </div>

            <div className="section">
              <button onClick={() => toggleSection('sizing')} className="section-header">
                <span>SIZING</span>
                <span className={activeSection === 'sizing' ? 'arrow up' : 'arrow down'}></span>
              </button>
              {activeSection === 'sizing' && (
                <div className="section-content">
                  Sizing information goes here...
                </div>
              )}
            </div>

            <div className="section">
              <button onClick={() => toggleSection('shipping')} className="section-header">
                <span>SHIPPING INFORMATION</span>
                <span className={activeSection === 'shipping' ? 'arrow up' : 'arrow down'}></span>
              </button>
              {activeSection === 'shipping' && (
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
