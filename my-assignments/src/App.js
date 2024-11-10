import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import OrderInfo from './components/OrderInfo';
import './App.css';

function App() {
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const handleProductSelect = (product, qty) => {
    setSelectedProduct(product);
    setQuantity(qty);
  };

  return (
    <div className="App">
      <Header title="Product Store" />
      <ProductForm products={products} onProductSelect={handleProductSelect} />
      <OrderInfo product={selectedProduct} quantity={quantity} />
    </div>
  );
}

export default App;
