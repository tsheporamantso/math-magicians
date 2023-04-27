import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/MyCalculator';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Calculator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
