import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <Navbar />
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => handleRemove(item.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <button onClick={handleCheckout} className="checkout-btn">
              Checkout
            </button>
            <Link to="/plants">
              <button className="continue-shopping-btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;