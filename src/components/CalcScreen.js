import React from 'react';
import { useSelector } from "react-redux";

const CalcScreen = ({ theme2, theme3 }) => {
  const { input1, input2, calcType } = useSelector((state) => state.calc);

  return (
    <div className={`
      calculator-screen
      ${ theme2 ? "theme2" : "" }
      ${ theme3 ? "theme3" : "" }
    `}>
      <h1>{input1}</h1>
      <h1>{calcType}</h1>
      <h1>{input2}</h1>
    </div>
  )
}

export default CalcScreen;
