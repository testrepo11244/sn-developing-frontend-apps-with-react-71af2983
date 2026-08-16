import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <Router>
      <div className="App">
        {/* Landing Page */}
        {!showProducts && (
          <section className="landing-page">
            <h1>Welcome to Paradise Nursery</h1>
            <p>
              Discover a curated collection of houseplants that bring life and
              style to any space.
            </p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </section>
        )}

        {/* Main Application Routes */}
        {showProducts && (
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;