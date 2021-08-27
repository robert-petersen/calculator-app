import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux"; 
import { themeActionCreators } from "../state/actions/index";

const CalcTop = () => {
  const { theme2, theme3, themeNumber } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { changeThemeAction } = bindActionCreators(themeActionCreators, dispatch);

  const themeToggle = (themeNumber) => {
    changeThemeAction(themeNumber);
  }

  return (
    <div className={`
      calculator-top
      ${ theme2 ? "theme2" : "" }
      ${ theme3 ? "theme3" : "" }
    `}>
      <h1 className="top-title">calc</h1>
      <div className="top-themes-container" >
        <h2 className="themes-title">Theme</h2>
        <div className="theme-select-container">
          <div className="theme-number-container">
            <h3 className="theme-number">1</h3>
            <h3 className="theme-number">2</h3>
            <h3 className="theme-number">3</h3>
          </div>
          <div 
            className={`theme-button-selecter 
              ${ theme2 ? "theme2" : "" }
              ${ theme3 ? "theme3" : "" }
            `} onClick={() => {themeToggle(themeNumber)}}>
          <div 
              className={`button-select 
                ${ themeNumber === 1 ? "selected" : "" } 
                ${ theme2 ? "theme2" : "" }
                ${ theme3 ? "theme3" : "" }
              `}>
            </div>
            <div 
              className={`button-select 
                ${ themeNumber === 2 ? "selected" : "" } 
                ${ theme2 ? "theme2" : "" }
                ${ theme3 ? "theme3" : "" }
              `}>
            </div>
            <div 
              className={`button-select 
                ${ themeNumber === 3 ? "selected" : "" } 
                ${ theme2 ? "theme2" : "" }
                ${ theme3 ? "theme3" : "" }
              `}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalcTop;
