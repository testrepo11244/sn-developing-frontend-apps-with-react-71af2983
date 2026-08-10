import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/CartSlice';

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('plants')}>Plants</button>
          <button onClick={() => setPage('cart')}>Cart (0)</button>
        </nav>
        <h2>Your cart is empty.</h2>
        <button onClick={() => setPage('plants')}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <nav className="navbar">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('plants')}>Plants</button>
        <button onClick={() => setPage('cart')}>
          Cart ({cartItems.reduce((t, i) => t + i.quantity, 0)})
        </button>
      </nav>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
            </div>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        <button onClick={handleCheckout}>Checkout</button>
        <button onClick={() => setPage('plants')}>Continue Shopping</button>
      </div>
    </div>
  );
}

export default CartItem;