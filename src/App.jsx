import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const handleGetStarted = () => setPage('plants');

  return (
    <div className="App">
      {page === 'home' && (
        <div className="landing">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={handleGetStarted} className="get-started-btn">
            Get Started
          </button>
        </div>
      )}
      {page === 'plants' && <ProductList setPage={setPage} />}
      {page === 'cart' && <CartItem setPage={setPage} />}
    </div>
  );
}

export default App;