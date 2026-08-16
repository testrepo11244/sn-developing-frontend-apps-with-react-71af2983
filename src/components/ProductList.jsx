import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import "./ProductList.css";

const categories = [
  {
    name: "Air‑Purifying",
    plants: [
      {
        id: "ap1",
        name: "Spider Plant",
        price: 12.99,
        img: "https://via.placeholder.com/150?text=Spider+Plant",
      },
      {
        id: "ap2",
        name: "Peace Lily",
        price: 15.5,
        img: "https://via.placeholder.com/150?text=Peace+Lily",
      },
      {
        id: "ap3",
        name: "Snake Plant",
        price: 14.0,
        img: "https://via.placeholder.com/150?text=Snake+Plant",
      },
      {
        id: "ap4",
        name: "Boston Fern",
        price: 11.75,
        img: "https://via.placeholder.com/150?text=Boston+Fern",
      },
      {
        id: "ap5",
        name: "Rubber Plant",
        price: 18.2,
        img: "https://via.placeholder.com/150?text=Rubber+Plant",
      },
      {
        id: "ap6",
        name: "Philodendron",
        price: 13.4,
        img: "https://via.placeholder.com/150?text=Philodendron",
      },
    ],
  },
  {
    name: "Low‑Light",
    plants: [
      {
        id: "ll1",
        name: "ZZ Plant",
        price: 16.99,
        img: "https://via.placeholder.com/150?text=ZZ+Plant",
      },
      {
        id: "ll2",
        name: "Pothos",
        price: 9.99,
        img: "https://via.placeholder.com/150?text=Pothos",
      },
      {
        id: "ll3",
        name: "Cast Iron Plant",
        price: 13.5,
        img: "https://via.placeholder.com/150?text=Cast+Iron+Plant",
      },
      {
        id: "ll4",
        name: "Chinese Evergreen",
        price: 12.0,
        img: "https://via.placeholder.com/150?text=Chinese+Evergreen",
      },
      {
        id: "ll5",
        name: "Dracaena",
        price: 14.75,
        img: "https://via.placeholder.com/150?text=Dracaena",
      },
      {
        id: "ll6",
        name: "Peace Lily (Low Light)",
        price: 15.0,
        img: "https://via.placeholder.com/150?text=Peace+Lily+LL",
      },
    ],
  },
  {
    name: "Succulents",
    plants: [
      {
        id: "su1",
        name: "Aloe Vera",
        price: 8.99,
        img: "https://via.placeholder.com/150?text=Aloe+Vera",
      },
      {
        id: "su2",
        name: "Echeveria",
        price: 7.5,
        img: "https://via.placeholder.com/150?text=Echeveria",
      },
      {
        id: "su3",
        name: "Jade Plant",
        price: 9.25,
        img: "https://via.placeholder.com/150?text=Jade+Plant",
      },
      {
        id: "su4",
        name: "Haworthia",
        price: 6.8,
        img: "https://via.placeholder.com/150?text=Haworthia",
      },
      {
        id: "su5",
        name: "Sedum",
        price: 5.99,
        img: "https://via.placeholder.com/150?text=Sedum",
      },
      {
        id: "su6",
        name: "Gasteria",
        price: 7.2,
        img: "https://via.placeholder.com/150?text=Gasteria",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className="product-list-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          Plants
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart ({totalQuantity})
        </Link>
      </nav>

      {/* Plant Categories */}
      {categories.map((category) => (
        <section key={category.name} className="category-section">
          <h2>{category.name}</h2>
          <div className="plants-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.img} alt={plant.name} className="plant-thumb" />
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
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
}

export default ProductList;