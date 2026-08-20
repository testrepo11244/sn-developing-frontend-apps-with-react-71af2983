import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      <Navbar />
      {!showProducts ? (
        <section className="landing-page">
          <h1 className="welcome-text">Welcome to Paradise Nursery</h1>
          <p className="tagline">
            Your one‑stop shop for healthy, happy houseplants.
          </p>
          <button className="get-started-btn" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </section>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;