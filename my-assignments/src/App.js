import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainUI from './components/MainUI';
import AnotherComponent from './components/AnotherComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainUI />} />
        <Route path="/another" element={<AnotherComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
