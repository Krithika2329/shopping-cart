import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'canvas shoes', price: 20, rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9u-9QDMqLuVW5tTQjo5_fsOfk4PGmCN9XOg&usqp=CAU' },
    { id: 2, name: 'sneakers', price: 30, rating: 3, image: 'data:image/jpeg;base64,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' },
    {id: 3, name: 'running shoes', price: 50, rating: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7EtVg4CCWMLfVLbpyW_FB85IbUiWbElPtg&usqp=CAU' },
    {id: 4, name: 'casual shoes', price: 20, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi4bH_40E-HhxvNEQNFK7bk6BLN0rEwRZtg&usqp=CAU' },
    
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </nav>
      </header>
      <main>
        <aside>
          <h2>Categories</h2>
          {/* Add your category filters here */}
        </aside>
        <section className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <div className="product-rating">Rating: {product.rating}/5</div>
              </div>
              <div className="product-actions">
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </section>
        <section className="cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
