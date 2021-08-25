import React from 'react';

const CalcTop = () => {
  return (
    <div className="calculator-top">
      <h1 className="top-title">calc</h1>
      <div className="top-themes-container" >
        <h2 className="themes-title">Theme</h2>
        <div className="theme-select-container">
          <div className="theme-number-container">
            <h3 className="theme-number">1</h3>
            <h3 className="theme-number">2</h3>
            <h3 className="theme-number">3</h3>
          </div>
          <div className="theme-button">
            <div className="button-select"></div>
            <div className="button-select"></div>
            <div className="button-select"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalcTop;
