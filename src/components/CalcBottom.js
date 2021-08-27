import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/actions/index";

const CalcBottom = () => {
  const { theme2, theme3 } = useSelector((state) => state.theme);
  const { input1, input2, calcType, toggleInput } = useSelector((state) => state.calc);
  const dispatch = useDispatch();
  const { updateInput1Action, updateInput2Action, updateCalcTypeAction, toggleInputAction, addAction, subtractAction, divideAction, multiplyAction, resetAction } = bindActionCreators(actionCreators, dispatch);

  const addToInput = (toggleInput, value) => {
    if ( toggleInput ) {
      updateInput1Action(value);
    } else {
      updateInput2Action(value);
    }
  }

  const settingCalcType = (toggleInput, value) => {
    if ( toggleInput ) {
      updateCalcTypeAction(value);
      toggleInputAction();
    }
  }

  const del = (toggleInput) => {
    if ( toggleInput ) {
      updateInput1Action("delete");
    } else {
      updateInput2Action("delete");
    }
  }

  const solve = (toggleInput, input1, input2, calcType) => {
    if (toggleInput === false) {
      let one = parseFloat(input1);
      let two = parseFloat(input2);
      if (calcType === "+") {
        addAction(one, two);
      } else if (calcType === "-") {
        subtractAction(one, two);
      } else if (calcType === "/") {
        divideAction(one, two);
      } else if (calcType === "x") {
        multiplyAction(one, two);
      }
    }
  }

  const reset = () => {
    resetAction();
  }

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
        `}
        onClick={() => {addToInput(toggleInput, "7")}}
      >7</div>

      <div className={`
          regular eight
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "8")}}
      >8</div>

      <div className={`
          regular nine
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "9")}}
      >9</div>

      <div className={`
          secondary del
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {del(toggleInput)}}
      >DEL</div>


      <div className={`
          regular four
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "4")}}
      >4</div>

      <div className={`
          regular five
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "5")}}
      >5</div>

      <div className={`
          regular six
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "6")}}
      >6</div>

      <div className={`
          regular plus
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {settingCalcType(toggleInput, "+")}}
      >+</div>


      <div className={`
          regular one
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "1")}}
      >1</div>

      <div className={`
          regular two
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "2")}}
      >2</div>

      <div className={`
          regular three
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "3")}}
      >3</div>

      <div className={`
          regular minus
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {settingCalcType(toggleInput, "-")}}
      >-</div>


      <div className={`
          regular dot
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, ".")}}
      >.</div>

      <div className={`
          regular zero
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {addToInput(toggleInput, "0")}}
      >0</div>

      <div className={`
          regular divide
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {settingCalcType(toggleInput, "/")}}
      >/</div>

      <div className={`
          regular times
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {settingCalcType(toggleInput, "x")}}
      >X</div>


      <div className={`
          secondary reset
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {reset()}}
      >RESET</div>

      <div className={`
          equal
          ${ theme2 ? "theme2" : "" }
          ${ theme3 ? "theme3" : "" }
        `}
        onClick={() => {solve(toggleInput, input1, input2, calcType)}}
      >=</div>
    </div>
  )
}

export default CalcBottom;
