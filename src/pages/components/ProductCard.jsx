import React from "react";
import "./styles/ProductCard.css";

export default function ProductCard(props) {
  const { name, image, price } = props;
  return (
    <div className="product-box column align-center">
      <div className="column">
        <img src={image} className="product-thumbnail" />
        <span className="add-to-cart">ADD TO CART</span>
      </div>

      <span className="product-title text-18">{name}</span>

      <span>{price} INR</span>
    </div>
  );
}
