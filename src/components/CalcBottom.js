import React from 'react';

const CalcBottom = ({ theme2, theme3 }) => {
  return (
    <div className={`
      calculator-bottom
      ${ theme2 ? "theme2" : "" }
      ${ theme3 ? "theme3" : "" }
    `}>
      <div className={`
        regular seven
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>7</div>
      <div className={`
        regular eight
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>8</div>
      <div className={`
        regular nine
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>9</div>
      <div className={`
        secondary del
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>DEL</div>

      <div className={`
        regular four
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>4</div>
      <div className={`
        regular five
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>5</div>
      <div className={`
        regular six
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>6</div>
      <div className={`
        regular plus
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>+</div>

      <div className={`
        regular one
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>1</div>
      <div className={`
        regular two
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>2</div>
      <div className={`
        regular three
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>3</div>
      <div className={`
        regular minus
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>-</div>

      <div className={`
        regular dot
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>.</div>
      <div className={`
        regular zero
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>0</div>
      <div className={`
        regular divide
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>/</div>
      <div className={`
        regular times
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>X</div>

      <div className={`
        secondary reset
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>RESET</div>
      <div className={`
        equal
        ${ theme2 ? "theme2" : "" }
        ${ theme3 ? "theme3" : "" }
      `}>=</div>
    </div>
  )
}

export default CalcBottom;
