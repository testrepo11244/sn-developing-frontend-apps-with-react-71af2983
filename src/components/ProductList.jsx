import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const plants = [
  // Indoor Plants
  { id: 1, name: 'Peace Lily', price: 25, category: 'Indoor Plants', image: 'https://via.placeholder.com/150?text=Peace+Lily' },
  { id: 2, name: 'Snake Plant', price: 20, category: 'Indoor Plants', image: 'https://via.placeholder.com/150?text=Snake+Plant' },
  { id: 3, name: 'Spider Plant', price: 15, category: 'Indoor Plants', image: 'https://via.placeholder.com/150?text=Spider+Plant' },
  { id: 4, name: 'Philodendron', price: 18, category: 'Indoor Plants', image: 'https://via.placeholder.com/150?text=Philodendron' },
  { id: 5, name: 'ZZ Plant', price: 22, category: 'Indoor Plants', image: 'https://via.placeholder.com/150?text=ZZ+Plant' },
  { id: 6, name: 'Pothos', price: 12, category: 'Indoor Plants', image: 'https://via.placeholder.com/150?text=Pothos' },
  // Succulents
  { id: 7, name: 'Aloe Vera', price: 10, category: 'Succulents', image: 'https://via.placeholder.com/150?text=Aloe+Vera' },
  { id: 8, name: 'Echeveria', price: 8, category: 'Succulents', image: 'https://via.placeholder.com/150?text=Echeveria' },
  { id: 9, name: 'Jade Plant', price: 14, category: 'Succulents', image: 'https://via.placeholder.com/150?text=Jade+Plant' },
  { id: 10, name: 'Haworthia', price: 9, category: 'Succulents', image: 'https://via.placeholder.com/150?text=Haworthia' },
  { id: 11, name: 'Sedum', price: 7, category: 'Succulents', image: 'https://via.placeholder.com/150?text=Sedum' },
  { id: 12, name: 'Agave', price: 16, category: 'Succulents', image: 'https://via.placeholder.com/150?text=Agave' },
  // Flowering Plants
  { id: 13, name: 'Orchid', price: 30, category: 'Flowering Plants', image: 'https://via.placeholder.com/150?text=Orchid' },
  { id: 14, name: 'Bromeliad', price: 28, category: 'Flowering Plants', image: 'https://via.placeholder.com/150?text=Bromeliad' },
  { id: 15, name: 'Anthurium', price: 26, category: 'Flowering Plants', image: 'https://via.placeholder.com/150?text=Anthurium' },
  { id: 16, name: 'African Violet', price: 12, category: 'Flowering Plants', image: 'https://via.placeholder.com/150?text=African+Violet' },
  { id: 17, name: 'Kalanchoe', price: 15, category: 'Flowering Plants', image: 'https://via.placeholder.com/150?text=Kalanchoe' },
  { id: 18, name: 'Hibiscus', price: 35, category: 'Flowering Plants', image: 'https://via.placeholder.com/150?text=Hibiscus' },
];

const categories = ['Indoor Plants', 'Succulents', 'Flowering Plants'];

function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (plantId) => cartItems.some(item => item.id === plantId);

  const handleAddToCart = (plant) => {
    if (!isInCart(plant.id)) {
      dispatch(addToCart({ ...plant, quantity: 1 }));
    }
  };

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('plants')}>Plants</button>
        <button onClick={() => setPage('cart')}>
          Cart ({totalCartItems})
        </button>
      </nav>
      <div className="category-container">
        {categories.map(category => (
          <div key={category} className="category">
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
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
    </div>
  );
}

export default ProductList;