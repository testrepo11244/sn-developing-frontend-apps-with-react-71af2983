import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
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

const plants = [
  // Indoor Plants (6)
  { id: 1, name: 'Peace Lily', price: 15.99, category: 'Indoor Plants', thumbnail: 'https://via.placeholder.com/150?text=Peace+Lily' },
  { id: 2, name: 'Snake Plant', price: 12.99, category: 'Indoor Plants', thumbnail: 'https://via.placeholder.com/150?text=Snake+Plant' },
  { id: 3, name: 'Spider Plant', price: 9.99, category: 'Indoor Plants', thumbnail: 'https://via.placeholder.com/150?text=Spider+Plant' },
  { id: 4, name: 'Pothos', price: 8.99, category: 'Indoor Plants', thumbnail: 'https://via.placeholder.com/150?text=Pothos' },
  { id: 5, name: 'ZZ Plant', price: 14.99, category: 'Indoor Plants', thumbnail: 'https://via.placeholder.com/150?text=ZZ+Plant' },
  { id: 6, name: 'Philodendron', price: 11.99, category: 'Indoor Plants', thumbnail: 'https://via.placeholder.com/150?text=Philodendron' },
  // Succulents (6)
  { id: 7, name: 'Aloe Vera', price: 7.99, category: 'Succulents', thumbnail: 'https://via.placeholder.com/150?text=Aloe+Vera' },
  { id: 8, name: 'Echeveria', price: 6.99, category: 'Succulents', thumbnail: 'https://via.placeholder.com/150?text=Echeveria' },
  { id: 9, name: 'Jade Plant', price: 8.99, category: 'Succulents', thumbnail: 'https://via.placeholder.com/150?text=Jade+Plant' },
  { id: 10, name: 'Haworthia', price: 5.99, category: 'Succulents', thumbnail: 'https://via.placeholder.com/150?text=Haworthia' },
  { id: 11, name: 'Sedum', price: 6.49, category: 'Succulents', thumbnail: 'https://via.placeholder.com/150?text=Sedum' },
  { id: 12, name: 'Cactus', price: 9.99, category: 'Succulents', thumbnail: 'https://via.placeholder.com/150?text=Cactus' },
  // Flowering Plants (6)
  { id: 13, name: 'Orchid', price: 19.99, category: 'Flowering Plants', thumbnail: 'https://via.placeholder.com/150?text=Orchid' },
  { id: 14, name: 'African Violet', price: 10.99, category: 'Flowering Plants', thumbnail: 'https://via.placeholder.com/150?text=African+Violet' },
  { id: 15, name: 'Begonia', price: 12.99, category: 'Flowering Plants', thumbnail: 'https://via.placeholder.com/150?text=Begonia' },
  { id: 16, name: 'Anthurium', price: 14.99, category: 'Flowering Plants', thumbnail: 'https://via.placeholder.com/150?text=Anthurium' },
  { id: 17, name: 'Bromeliad', price: 13.99, category: 'Flowering Plants', thumbnail: 'https://via.placeholder.com/150?text=Bromeliad' },
  { id: 18, name: 'Kalanchoe', price: 9.49, category: 'Flowering Plants', thumbnail: 'https://via.placeholder.com/150?text=Kalanchoe' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => cartItems.some((item) => item.id === plantId);

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="product-list-page">
      <Navbar />
      <h1>Our Plants</h1>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;