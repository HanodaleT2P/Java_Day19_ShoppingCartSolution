import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>🛍️ React Shopping App</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
