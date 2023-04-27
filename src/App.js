import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/MyCalculator';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navbar';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/container" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
