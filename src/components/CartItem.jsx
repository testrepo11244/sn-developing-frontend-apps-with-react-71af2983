import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    alert("Coming Soon! Checkout functionality will be added later.");
  };

  const handleContinueShopping = () => {
    navigate("/plants");
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty.</h2>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
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
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.name} className="cart-thumb" />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <h3>Total Amount: ${calculateTotalAmount()}</h3>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
        <button className="continue-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="clear-btn" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;