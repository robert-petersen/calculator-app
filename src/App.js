import React, { useState } from "react";
import CalcBottom from "./components/CalcBottom";
import CalcScreen from "./components/CalcScreen";
import CalcTop from "./components/CalcTop";

function App() {
  const [ themeNumber, setThemeNumber ] = useState(1);
  const [ theme2, setTheme2 ] = useState(false);
  const [ theme3, setTheme3 ] = useState(false);

  return (
    <div className={`
      app
      ${ theme2 ? "theme2" : "" }
      ${ theme3 ? "theme3" : "" }
    `}>
      <div className="calculator">
        <CalcTop 
          theme2={theme2} 
          theme3={theme3} 
          themeNumber={themeNumber} 
          setThemeNumber={setThemeNumber} 
          setTheme2={setTheme2} 
          setTheme3={setTheme3} 
        />
        <CalcScreen 
          theme2={theme2} 
          theme3={theme3} 
        />
        <CalcBottom 
          theme2={theme2} 
          theme3={theme3} 
        />
      </div>
    </div>
  );
}

export default App;
