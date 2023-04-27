import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/MyCalculator';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
