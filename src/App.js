import React, { useState } from "react";
import Calculator from "./components/Calculator";

export default function App() {
  const [showCalc, setShowCalc] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShowCalc(!showCalc)}>show Calc</button>
      { showCalc ? 
      <Calculator />
      : null     
    }
    </>
  );
}
