import React, { useState } from 'react';

const ProductForm = ({ products, onProductSelect }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
    onProductSelect(products[e.target.value], quantity);
  };

  const handleQuantityChange = (e) => {
    const qty = Math.max(1, e.target.value); // Vähintään 1
    setQuantity(qty);
    onProductSelect(products[selectedProductIndex], qty);
  };

  return (
    <form style={{ margin: '20px' }}>
      <label>Product:
        <select onChange={handleProductChange} value={selectedProductIndex}>
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
      </label>
      <label> Quantity:
        <input type="number" value={quantity} min="1" onChange={handleQuantityChange} />
      </label>
    </form>
  );
};

export default ProductForm;
