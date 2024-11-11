import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentUI from './components/ComponentUI';
import OrderInfo from './components/OrderInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentUI />} />
        <Route path="/order-info" element={<OrderInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
