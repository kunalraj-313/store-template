import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./styles/CartSidebar.css";
import { FaTimes } from "react-icons/fa";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, cartTotal } = useAppContext();

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.product_id} className="cart-item">
              <img src={item.img_url} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.product_id)}
              >
                <FaTimes />
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}
