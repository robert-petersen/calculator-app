import React from 'react';

const CalcBottom = () => {
  return (
    <div className="calculator-bottom">
      <div className="regular seven">7</div>
      <div className="regular eight">8</div>
      <div className="regular nine">9</div>
      <div className="secondary del">DEL</div>

      <div className="regular four">4</div>
      <div className="regular five">5</div>
      <div className="regular six">6</div>
      <div className="regular plus">+</div>

      <div className="regular one">1</div>
      <div className="regular two">2</div>
      <div className="regular three">3</div>
      <div className="regular minus">-</div>

      <div className="regular dot">.</div>
      <div className="regular zero">0</div>
      <div className="regular divide">/</div>
      <div className="regular times">X</div>

      <div className="secondary reset">RESET</div>
      <div className="equal">=</div>
    </div>
  )
}

export default CalcBottom;
