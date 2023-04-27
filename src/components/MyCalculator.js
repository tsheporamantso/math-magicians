import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../App.css';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const { total, next, operation } = state;

  const calculateResult = (calculateButton) => {
    setState((state) => calculate(state, calculateButton.target.textContent));
  };

  return (
    <>
      <div className="wrapper">
        <div className="header-container">
          <h2>Let&apos;s do some math!</h2>
        </div>
        <div className="container">
          <div className="child__result">
            {total}
            {operation}
            {next}
          </div>
          <div className="child__container">
            <button type="button" className="button_key" onClick={calculateResult}>AC</button>
            <button type="button" className="button_key" onClick={calculateResult}>+/-</button>
            <button type="button" className="button_key" onClick={calculateResult}>%</button>
            <button type="button" className="button_operator" onClick={calculateResult}>÷</button>
          </div>
          <div className="child__container">
            <button type="button" className="button_key" onClick={calculateResult}>7</button>
            <button type="button" className="button_key" onClick={calculateResult}>8</button>
            <button type="button" className="button_key" onClick={calculateResult}>9</button>
            <button type="button" className="button_operator" onClick={calculateResult}>x</button>
          </div>
          <div className="child__container">
            <button type="button" className="button_key" onClick={calculateResult}>4</button>
            <button type="button" className="button_key" onClick={calculateResult}>5</button>
            <button type="button" className="button_key" onClick={calculateResult}>6</button>
            <button type="button" className="button_operator" onClick={calculateResult}>-</button>
          </div>
          <div className="child__container">
            <button type="button" className="button_key" onClick={calculateResult}>1</button>
            <button type="button" className="button_key" onClick={calculateResult}>2</button>
            <button type="button" className="button_key" onClick={calculateResult}>3</button>
            <button type="button" className="button_operator" onClick={calculateResult}>+</button>
          </div>
          <div className="child__container">
            <button type="button" className="button_key zero" onClick={calculateResult}>0</button>
            <button type="button" className="button_key" onClick={calculateResult}>.</button>
            <button type="button" className="button_key equal" onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
