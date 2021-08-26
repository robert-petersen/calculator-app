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
    </div>
  );
}

export default App;
