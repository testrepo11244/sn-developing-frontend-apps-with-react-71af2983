import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import "./ProductList.css";

const plantData = [
  // Foliage Category
  {
    category: "Foliage",
    plants: [
      {
        id: "foliage-1",
        name: "Monstera Deliciosa",
        price: 45,
        img: "/images/monstera.jpg",
      },
      {
        id: "foliage-2",
        name: "Philodendron Pink Princess",
        price: 38,
        img: "/images/pink-princess.jpg",
      },
      {
        id: "foliage-3",
        name: "ZZ Plant",
        price: 30,
        img: "/images/zz-plant.jpg",
      },
      {
        id: "foliage-4",
        name: "Snake Plant",
        price: 25,
        img: "/images/snake-plant.jpg",
      },
      {
        id: "foliage-5",
        name: "Calathea Orbifolia",
        price: 42,
        img: "/images/calathea.jpg",
      },
      {
        id: "foliage-6",
        name: "Fiddle Leaf Fig",
        price: 55,
        img: "/images/fiddle-fig.jpg",
      },
    ],
  },
  // Succulents Category
  {
    category: "Succulents",
    plants: [
      {
        id: "succulent-1",
        name: "Echeveria",
        price: 12,
        img: "/images/echeveria.jpg",
      },
      {
        id: "succulent-2",
        name: "Aloe Vera",
        price: 15,
        img: "/images/aloe-vera.jpg",
      },
      {
        id: "succulent-3",
        name: "Haworthia",
        price: 14,
        img: "/images/haworthia.jpg",
      },
      {
        id: "succulent-4",
        name: "Jade Plant",
        price: 18,
        img: "/images/jade-plant.jpg",
      },
      {
        id: "succulent-5",
        name: "String of Pearls",
        price: 20,
        img: "/images/string-of-pearls.jpg",
      },
      {
        id: "succulent-6",
        name: "Gasteria",
        price: 13,
        img: "/images/gasteria.jpg",
      },
    ],
  },
  // Air‑Purifying Category
  {
    category: "Air‑Purifying",
    plants: [
      {
        id: "air-1",
        name: "Spider Plant",
        price: 22,
        img: "/images/spider-plant.jpg",
      },
      {
        id: "air-2",
        name: "Boston Fern",
        price: 28,
        img: "/images/boston-fern.jpg",
      },
      {
        id: "air-3",
        name: "Peace Lily",
        price: 35,
        img: "/images/peace-lily.jpg",
      },
      {
        id: "air-4",
        name: "Rubber Plant",
        price: 40,
        img: "/images/rubber-plant.jpg",
      },
      {
        id: "air-5",
        name: "Areca Palm",
        price: 45,
        img: "/images/areca-palm.jpg",
      },
      {
        id: "air-6",
        name: "English Ivy",
        price: 24,
        img: "/images/english-ivy.jpg",
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="product-list-page">
      <nav className="product-navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart <span className="cart-count">({totalCartCount})</span>
        </Link>
      </nav>

      {plantData.map((category) => (
        <section key={category.category} className="category-section">
          <h2>{category.category}</h2>
          <div className="plants-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.img} alt={plant.name} className="plant-thumb" />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;