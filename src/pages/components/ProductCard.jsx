import "./styles/ProductCard.css";
import { useAppContext } from "../../context/AppContext";

export default function ProductCard(props) {
  const { name, image, price, product } = props;
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-box column align-center">
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
