import React from 'react';

const CalcScreen = ({ theme2, theme3 }) => {
  return (
    <div className={`
      calculator-screen
      ${ theme2 ? "theme2" : "" }
      ${ theme3 ? "theme3" : "" }
    `}>
      <h1>first#</h1>
      <h1>+</h1>
      <h1>second#</h1>
    </div>
  )
}

export default CalcScreen;
