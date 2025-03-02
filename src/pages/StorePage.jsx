import { useMemo, useState } from "react";
import "./styles/StorePage.css";
import ProductCard from "./components/ProductCard";

const products = [
  {
    product_id: "1001",
    name: "Striped Casual Shirt",
    category: "Shirts",
    brand: "CasualWear",
    description:
      "A stylish striped shirt made from soft cotton, perfect for casual outings.",
    available_sizes: [
      { size: "Small", price: 29.99 },
      { size: "Medium", price: 29.99 },
      { size: "Large", price: 31.99 },
      { size: "X-Large", price: 31.99 },
    ],
    price: 29.99,
    colors_available: ["Blue", "White", "Gray"],
    stock: { small: 10, medium: 15, large: 8, xlarge: 5 },
    img_url: "/images/shirt-001.png",
    material: "100% Cotton",
    reviews: [
      {
        username: "casualfan123",
        rating: 4,
        comment: "Great fit and comfortable, but the stripes could be bolder.",
      },
    ],
  },
  {
    product_id: "1002",
    name: "Formal White Shirt",
    category: "Shirts",
    brand: "Elegance",
    description:
      "A crisp white shirt ideal for formal occasions or office wear.",
    available_sizes: [
      { size: "Small", price: 39.99 },
      { size: "Medium", price: 39.99 },
      { size: "Large", price: 41.99 },
      { size: "X-Large", price: 41.99 },
    ],
    price: 39.99,
    colors_available: ["White"],
    stock: { small: 12, medium: 18, large: 10, xlarge: 7 },
    img_url: "/images/shirt-002.png",
    material: "Cotton Blend",
    reviews: [
      {
        username: "officeguy99",
        rating: 5,
        comment: "Perfect for formal events, fits well and looks sharp.",
      },
    ],
  },
  {
    product_id: "1003",
    name: "Plaid Flannel Shirt",
    category: "Shirts",
    brand: "CozyStyle",
    description: "A warm and cozy flannel shirt with a classic plaid design.",
    available_sizes: [
      { size: "Small", price: 34.99 },
      { size: "Medium", price: 34.99 },
      { size: "Large", price: 36.99 },
      { size: "X-Large", price: 36.99 },
    ],
    price: 34.99,
    colors_available: ["Red", "Green", "Blue"],
    stock: { small: 8, medium: 12, large: 6, xlarge: 4 },
    img_url: "/images/shirt-003.png",
    material: "Flannel",
    reviews: [
      {
        username: "cozyfan101",
        rating: 5,
        comment: "Super comfortable and warm, perfect for winter.",
      },
    ],
  },
  {
    product_id: "1004",
    name: "Denim Shirt",
    category: "Shirts",
    brand: "DenimWorks",
    description: "A rugged denim shirt for a casual yet stylish look.",
    available_sizes: [
      { size: "Small", price: 44.99 },
      { size: "Medium", price: 44.99 },
      { size: "Large", price: 46.99 },
      { size: "X-Large", price: 46.99 },
    ],
    price: 44.99,
    colors_available: ["Blue", "Black"],
    stock: { small: 7, medium: 10, large: 5, xlarge: 3 },
    img_url: "/images/shirt-004.png",
    material: "Denim",
    reviews: [
      {
        username: "denimlover88",
        rating: 4,
        comment: "Great quality, but a bit stiff at first.",
      },
    ],
  },
  {
    product_id: "1005",
    name: "Graphic Print Shirt",
    category: "Shirts",
    brand: "UrbanTrends",
    description:
      "A trendy shirt with a unique graphic print for a bold statement.",
    available_sizes: [
      { size: "Small", price: 24.99 },
      { size: "Medium", price: 24.99 },
      { size: "Large", price: 26.99 },
      { size: "X-Large", price: 26.99 },
    ],
    price: 24.99,
    colors_available: ["Black", "White"],
    stock: { small: 9, medium: 14, large: 7, xlarge: 6 },
    img_url: "/images/shirt-005.png",
    material: "Polyester",
    reviews: [
      {
        username: "trendygal123",
        rating: 5,
        comment: "Love the design, very unique and stylish.",
      },
    ],
  },
  {
    product_id: "1006",
    name: "Linen Shirt",
    category: "Shirts",
    brand: "BreathableWear",
    description: "A lightweight linen shirt perfect for summer days.",
    available_sizes: [
      { size: "Small", price: 49.99 },
      { size: "Medium", price: 49.99 },
      { size: "Large", price: 51.99 },
      { size: "X-Large", price: 51.99 },
    ],
    price: 49.99,
    colors_available: ["Beige", "White"],
    stock: { small: 6, medium: 9, large: 4, xlarge: 2 },
    img_url: "/images/shirt-006.png",
    material: "Linen",
    reviews: [
      {
        username: "summerlover99",
        rating: 5,
        comment: "Very breathable and comfortable, perfect for hot weather.",
      },
    ],
  },
  {
    product_id: "2001",
    name: "Slim Fit Chinos",
    category: "Pants",
    brand: "SmartLook",
    description: "Slim-fit chinos for a modern and polished look.",
    available_sizes: [
      { size: "30", price: 59.99 },
      { size: "32", price: 59.99 },
      { size: "34", price: 61.99 },
      { size: "36", price: 61.99 },
    ],
    price: 59.99,
    colors_available: ["Khaki", "Navy", "Black"],
    stock: { 30: 5, 32: 8, 34: 6, 36: 4 },
    img_url: "/images/pant-001.png",
    material: "Cotton Blend",
    reviews: [
      {
        username: "stylishguy101",
        rating: 5,
        comment: "Fits perfectly and looks great with everything.",
      },
    ],
  },
  {
    product_id: "2002",
    name: "Cargo Pants",
    category: "Pants",
    brand: "OutdoorGear",
    description:
      "Durable cargo pants with multiple pockets for outdoor adventures.",
    available_sizes: [
      { size: "30", price: 49.99 },
      { size: "32", price: 49.99 },
      { size: "34", price: 51.99 },
      { size: "36", price: 51.99 },
    ],
    price: 49.99,
    colors_available: ["Green", "Brown"],
    stock: { 30: 7, 32: 10, 34: 8, 36: 6 },
    img_url: "/images/pant-002.png",
    material: "Polyester Blend",
    reviews: [
      {
        username: "outdoorlover88",
        rating: 4,
        comment: "Great for hiking, but could be more breathable.",
      },
    ],
  },
  {
    product_id: "2003",
    name: "Classic Jeans",
    category: "Pants",
    brand: "DenimWorks",
    description: "Classic blue jeans for everyday wear.",
    available_sizes: [
      { size: "30", price: 69.99 },
      { size: "32", price: 69.99 },
      { size: "34", price: 71.99 },
      { size: "36", price: 71.99 },
    ],
    price: 69.99,
    colors_available: ["Blue", "Black"],
    stock: { 30: 6, 32: 9, 34: 7, 36: 5 },
    img_url: "/images/pant-003.png",
    material: "Denim",
    reviews: [
      {
        username: "jeanslover123",
        rating: 5,
        comment: "Comfortable and durable, my go-to jeans.",
      },
    ],
  },
  {
    product_id: "3001",
    name: "Casual Denim Shorts",
    category: "Shorts",
    brand: "DenimWorks",
    description: "Stylish denim shorts for a casual summer look.",
    available_sizes: [
      { size: "30", price: 39.99 },
      { size: "32", price: 39.99 },
      { size: "34", price: 41.99 },
      { size: "36", price: 41.99 },
    ],
    price: 39.99,
    colors_available: ["Blue", "Black"],
    stock: { 30: 5, 32: 8, 34: 6, 36: 4 },
    img_url: "/images/shorts-001.png",
    material: "Denim",
    reviews: [
      {
        username: "summerfan101",
        rating: 4,
        comment: "Great for summer, but could be a bit softer.",
      },
    ],
  },
  {
    product_id: "3002",
    name: "Athletic Shorts",
    category: "Shorts",
    brand: "SportyStep",
    description: "Lightweight and breathable shorts for sports and workouts.",
    available_sizes: [
      { size: "Small", price: 29.99 },
      { size: "Medium", price: 29.99 },
      { size: "Large", price: 31.99 },
      { size: "X-Large", price: 31.99 },
    ],
    price: 29.99,
    colors_available: ["Black", "Gray", "Blue"],
    stock: { small: 7, medium: 10, large: 8, xlarge: 6 },
    img_url: "/images/shorts-002.png",
    material: "Polyester",
    reviews: [
      {
        username: "runner87",
        rating: 5,
        comment: "Perfect for running, very comfortable and lightweight.",
      },
    ],
  },
  {
    product_id: "4001",
    name: "Sleeveless Tank Top",
    category: "Tank Tops",
    brand: "SummerStyle",
    description: "A lightweight and breathable tank top for hot summer days.",
    available_sizes: [
      { size: "Small", price: 19.99 },
      { size: "Medium", price: 19.99 },
      { size: "Large", price: 21.99 },
      { size: "X-Large", price: 21.99 },
    ],
    price: 19.99,
    colors_available: ["White", "Black", "Gray"],
    stock: { small: 10, medium: 15, large: 8, xlarge: 5 },
    img_url: "/images/tanktop-001.png",
    material: "Cotton",
    reviews: [
      {
        username: "summerlover99",
        rating: 5,
        comment: "Very comfortable and perfect for hot weather.",
      },
    ],
  },
];

export default function StorePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    []
  );

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="storepage-container">
      <div className="product-categories">
        {/* Desktop Layout */}
        <div className="desktop-categories">
          {categories.map((category, index) => (
            <span key={index} className="category-text">
              {category}
            </span>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="mobile-categories">
          <div className="dropdown-trigger" onClick={toggleDropdown}>
            {categories[0]}
          </div>
          {isExpanded && (
            <div className="options-container">
              {categories.slice(1).map((category, index) => (
                <div key={index} className="dropdown-option">
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="products-grid">
        {products.map((product, index) => {
          return (
            <ProductCard
              name={product.name}
              price={product.price}
              product={product}
              key={index}
              image={product.img_url}
            />
          );
        })}
      </div>
    </div>
  );
}
