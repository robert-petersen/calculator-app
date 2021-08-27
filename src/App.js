import React from "react";
import { useSelector } from "react-redux";
import CalcBottom from "./components/CalcBottom";
import CalcScreen from "./components/CalcScreen";
import CalcTop from "./components/CalcTop";

function App() {
  const { theme2, theme3 } = useSelector((state) => state.theme);

  return (
    <div className={`
      app
      ${ theme2 ? "theme2" : "" }
      ${ theme3 ? "theme3" : "" }
    `}>
      <div className="calculator">
        <CalcTop />
        <CalcScreen />
        <CalcBottom />
      </div>
    </div>
  );
}

export default App;
