"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [add, setAdd] = useState(0);
  const [add2, setAdd2] = useState(0);
  const [equal, setEqual] = useState(0);

  const increment1 = (event: any) => {
    setAdd(parseInt(event.target.value));
  };

  const increment2 = (event: any) => {
    setAdd2(parseInt(event.target.value));
  };

  const equalState = () => {
    setEqual(add + add2);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input type="number" name="value 1" onChange={increment1} />
      <button>Selected Number: {add}</button>
      <span>+</span>
      <input type="number" name="value 2" onChange={increment2} />
      <button>Selected Number: {add2}</button>
      <span>=</span>
      <button onClick={equalState} style={{cursor:"pointer"}}>calculate</button>
      <p> Your result = {equal} </p>
    </div>
  );
};

export default Calculator;
