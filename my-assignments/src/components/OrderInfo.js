import React from 'react';

const OrderInfo = ({ product, quantity }) => {
  if (!product) return null;

  const totalPrice = product.price * quantity;

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h2>Order Summary</h2>
      <p>Product: {product.name}</p>
      <p>Price per unit: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <p><strong>Total: ${totalPrice}</strong></p>
    </div>
  );
};

export default OrderInfo;
