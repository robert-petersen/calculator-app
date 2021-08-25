import React from "react";
import CalcBottom from "./components/CalcBottom";
import CalcScreen from "./components/CalcScreen";
import CalcTop from "./components/CalcTop";

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <CalcTop />
        <CalcScreen />
        <CalcBottom />
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://robert-petersen.vercel.app/" target="_blank" rel="noreferrer">Robert Petersen</a>.
      </div>
    </div>
  );
}

export default App;
