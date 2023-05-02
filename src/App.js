import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Navigation from './page/Navbar';
import Quote from './page/Quote';
import CalcText from './page/CalcText';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/container" element={<CalcText />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
