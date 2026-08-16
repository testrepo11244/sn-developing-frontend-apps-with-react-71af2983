import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateItemTotal = (item) => item.price * item.quantity;

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert("Checkout coming soon!");
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty.</h2>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          Plants
        </Link>
        <Link to="/cart" className="nav-link active">
          Cart
        </Link>
      </nav>

      <h2>Your Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Plant</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-item-row">
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  className="cart-item-thumb"
                />
              </td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button
                  className="qty-btn"
                  onClick={() => handleDecrease(item.id)}
                  disabled={item.quantity <= 1}
                >
                  –
                </button>
                <span className="qty-number">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </td>
              <td>${calculateItemTotal(item).toFixed(2)}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <h3>
          Total Amount: <span>${calculateTotalAmount().toFixed(2)}</span>
        </h3>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
        <button className="clear-cart-btn" onClick={handleClear}>
          Clear Cart
        </button>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default CartItem;