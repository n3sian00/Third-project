import React, { useState } from 'react';
import Header from './Header';
import ProductForm from './ProductForm';
import OrderInfo from './OrderInfo';

function App() {
    const products = [
        { name: "Product A", price: 10.0 },
        { name: "Product B", price: 15.0 },
        { name: "Product C", price: 20.0 },
    ];

    const [selectedOrder, setSelectedOrder] = useState({ product: products[0], quantity: 1 });

    const handleOrderChange = (product, quantity) => {
        setSelectedOrder({ product, quantity });
    };

    return (
        <div>
            <Header title="Welcome to Product Page!" />
            <ProductForm products={products} onOrderChange={handleOrderChange} />
            <OrderInfo product={selectedOrder.product} quantity={selectedOrder.quantity} />
        </div>
    );
}

export default App;
