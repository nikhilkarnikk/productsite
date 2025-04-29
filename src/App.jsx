import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './pages/Products';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App; 