import React, { useMemo } from "react";
import ProductPage from "./ProductPage";
import "./styles/StorePage.css";
import ProductCard from "./components/ProductCard";

const products = [
  {
    product_id: "123456",
    name: "Classic T-Shirt",
    category: "Shirts",
    brand: "FashionCo",
    description:
      "A comfortable, high-quality classic t-shirt made from 100% cotton. Perfect for casual wear.",
    available_sizes: [
      {
        size: "Small",
        price: 19.99,
      },
      {
        size: "Medium",
        price: 19.99,
      },
      {
        size: "Large",
        price: 21.99,
      },
      {
        size: "X-Large",
        price: 21.99,
      },
    ],
    price: 19.99,
    colors_available: ["Red", "Black", "White", "Blue"],
    stock: {
      small: 15,
      medium: 20,
      large: 12,
      xlarge: 10,
    },
    img_url: "https://pngtree.com/free-png-vectors/t-shirt",
    material: "100% Cotton",
    reviews: [
      {
        username: "fashionlover123",
        rating: 5,
        comment: "Love the feel of this shirt, great fit and comfortable!",
      },
      {
        username: "casualguy99",
        rating: 4,
        comment: "Nice quality, but wish it was a bit more fitted.",
      },
    ],
  },
  {
    product_id: "234567",
    name: "Running Shoes",
    category: "Shoes",
    brand: "SportyStep",
    description:
      "Lightweight running shoes with excellent grip and breathable material. Ideal for sports enthusiasts.",
    available_sizes: [
      {
        size: "8",
        price: 59.99,
      },
      {
        size: "9",
        price: 59.99,
      },
      {
        size: "10",
        price: 64.99,
      },
      {
        size: "11",
        price: 64.99,
      },
    ],
    colors_available: ["Gray", "Black", "Red"],
    price: 59.99,
    stock: {
      8: 8,
      9: 12,
      10: 5,
      11: 7,
    },
    img_url: "https://pngtree.com/free-png-vectors/t-shirt",
    material: "Mesh and Rubber",
    reviews: [
      {
        username: "runner87",
        rating: 5,
        comment:
          "Perfect for my morning runs, very comfortable and lightweight.",
      },
      {
        username: "jogger_101",
        rating: 4,
        comment: "Good grip, but the sizing runs a little small.",
      },
    ],
  },
  {
    product_id: "345678",
    name: "Leather Jacket",
    category: "Outerwear",
    brand: "UrbanFit",
    description:
      "Stylish leather jacket with a sleek fit, ideal for both casual and semi-formal looks.",
    available_sizes: [
      {
        size: "Small",
        price: 149.99,
      },
      {
        size: "Medium",
        price: 149.99,
      },
      {
        size: "Large",
        price: 159.99,
      },
      {
        size: "X-Large",
        price: 159.99,
      },
    ],
    price: 149.99,
    colors_available: ["Black", "Brown", "Dark Green"],
    stock: {
      small: 10,
      medium: 15,
      large: 8,
      xlarge: 5,
    },
    img_url: "https://pngtree.com/free-png-vectors/t-shirt",
    material: "Genuine Leather",
    reviews: [
      {
        username: "leatherlovers101",
        rating: 5,
        comment: "This jacket is incredible, great quality and fits perfectly.",
      },
      {
        username: "styleguru92",
        rating: 4,
        comment: "Nice look and feel, but the leather could be a bit softer.",
      },
    ],
  },
  {
    product_id: "123456",
    name: "Classic T-Shirt",
    category: "Shirts",
    brand: "FashionCo",
    description:
      "A comfortable, high-quality classic t-shirt made from 100% cotton. Perfect for casual wear.",
    available_sizes: [
      {
        size: "Small",
        price: 19.99,
      },
      {
        size: "Medium",
        price: 19.99,
      },
      {
        size: "Large",
        price: 21.99,
      },
      {
        size: "X-Large",
        price: 21.99,
      },
    ],
    price: 19.99,
    colors_available: ["Red", "Black", "White", "Blue"],
    stock: {
      small: 15,
      medium: 20,
      large: 12,
      xlarge: 10,
    },
    img_url: "https://pngtree.com/free-png-vectors/t-shirt",
    material: "100% Cotton",
    reviews: [
      {
        username: "fashionlover123",
        rating: 5,
        comment: "Love the feel of this shirt, great fit and comfortable!",
      },
      {
        username: "casualguy99",
        rating: 4,
        comment: "Nice quality, but wish it was a bit more fitted.",
      },
    ],
  },
  {
    product_id: "234567",
    name: "Running Shoes",
    category: "Shoes",
    brand: "SportyStep",
    description:
      "Lightweight running shoes with excellent grip and breathable material. Ideal for sports enthusiasts.",
    available_sizes: [
      {
        size: "8",
        price: 59.99,
      },
      {
        size: "9",
        price: 59.99,
      },
      {
        size: "10",
        price: 64.99,
      },
      {
        size: "11",
        price: 64.99,
      },
    ],
    colors_available: ["Gray", "Black", "Red"],
    price: 59.99,
    stock: {
      8: 8,
      9: 12,
      10: 5,
      11: 7,
    },
    img_url: "https://pngtree.com/free-png-vectors/t-shirt",
    material: "Mesh and Rubber",
    reviews: [
      {
        username: "runner87",
        rating: 5,
        comment:
          "Perfect for my morning runs, very comfortable and lightweight.",
      },
      {
        username: "jogger_101",
        rating: 4,
        comment: "Good grip, but the sizing runs a little small.",
      },
    ],
  },
  {
    product_id: "345678",
    name: "Leather Jacket",
    category: "Outerwear",
    brand: "UrbanFit",
    description:
      "Stylish leather jacket with a sleek fit, ideal for both casual and semi-formal looks.",
    available_sizes: [
      {
        size: "Small",
        price: 149.99,
      },
      {
        size: "Medium",
        price: 149.99,
      },
      {
        size: "Large",
        price: 159.99,
      },
      {
        size: "X-Large",
        price: 159.99,
      },
    ],
    price: 149.99,
    colors_available: ["Black", "Brown", "Dark Green"],
    stock: {
      small: 10,
      medium: 15,
      large: 8,
      xlarge: 5,
    },
    img_url: "https://pngtree.com/free-png-vectors/t-shirt",
    material: "Genuine Leather",
    reviews: [
      {
        username: "leatherlovers101",
        rating: 5,
        comment: "This jacket is incredible, great quality and fits perfectly.",
      },
      {
        username: "styleguru92",
        rating: 4,
        comment: "Nice look and feel, but the leather could be a bit softer.",
      },
    ],
  },
];

export default function StorePage() {

const categories = useMemo(()=>Array.from(new Set(products.map(product=>product.category))),[])

  return (
    <div className="storepage-container">
      <div className="product-categories">
      {
        categories.map((category,index)=>{
          return (
            <span className="category-text" key={index}>
              {category}
            </span>
          )
        })
      }
      </div>
      <div className="products-grid">
        {
          products.map((product,index)=>{
            return (
              <ProductCard name={product.name} price={product.price} key={index} image={product.img_url}/>
            )
          })
        }
      </div>
    </div>
  );
}
