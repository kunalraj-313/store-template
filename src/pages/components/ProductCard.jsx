import "./styles/ProductCard.css";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, image, name, price }) {
  const navigate = useNavigate();
  const { addToCart } = useAppContext();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/product/${product.product_id}`, {
      state: { product },
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent triggering the card click
    addToCart(product);
  };

  return (
    <div className="product-box column align-center" onClick={handleClick}>
      <div className="column">
        <img src={image} className="product-thumbnail" alt={name} />
        <button className="add-to-cart" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
      <span className="product-title text-18">{name}</span>
      <span>{price} INR</span>
    </div>
  );
}
