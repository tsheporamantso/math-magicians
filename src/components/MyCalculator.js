import React from 'react';
import ChildResult from './ChildResult';
import '../App.css';

function Calculator() {
  return (
    <div className="container">
      <ChildResult />
      <div className="child__container">
        <button type="button" className="button_key">AC</button>
        <button type="button" className="button_key">+/-</button>
        <button type="button" className="button_key">%</button>
        <button type="button" className="button_operator">÷</button>
      </div>
      <div className="child__container">
        <button type="button" className="button_key">7</button>
        <button type="button" className="button_key">8</button>
        <button type="button" className="button_key">9</button>
        <button type="button" className="button_operator">x</button>
      </div>
      <div className="child__container">
        <button type="button" className="button_key">4</button>
        <button type="button" className="button_key">5</button>
        <button type="button" className="button_key">6</button>
        <button type="button" className="button_operator">-</button>
      </div>
      <div className="child__container">
        <button type="button" className="button_key">1</button>
        <button type="button" className="button_key">2</button>
        <button type="button" className="button_key">3</button>
        <button type="button" className="button_operator">+</button>
      </div>
      <div className="child__container">
        <button type="button" className="button_key zero">0</button>
        <button type="button" className="button_key">.</button>
        <button type="button" className="button_key equal">=</button>
      </div>
    </div>
  );
}

export default Calculator;
