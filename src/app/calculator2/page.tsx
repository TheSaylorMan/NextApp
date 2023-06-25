"use client";

import React, { useState } from "react";
import styles from "./layout.module.scss";
import Input from "@/components/Input";
import ButtonCalc from "@/components/ButtonCalc";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("");
  const [equal, setEqual] = useState(0);
  const [error, setError] = useState(false);

  const handleOnChangeNum1 = (event: any) => {
    setNum1(parseInt(event.target.value));
  };

  const handleOnChangeNum2 = (event: any) => {
    setNum2(parseInt(event.target.value));
  };

  const handleOnChangeOperation = (op: string) => {
    setOperation(op);
  };

  const calculate = () => {
    setError(false);

    if (operation === "+") {
      setEqual(num1 + num2);
    } else if (operation === "-") {
      setEqual(num1 - num2);
    } else if (operation === "*") {
      setEqual(num1 * num2);
    } else {
      if (num2 !== 0) {
        setEqual(num1 / num2);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.calcHolder}>
        <Input type={"number"} name={"Value 1"} onChange={handleOnChangeNum1} />
        <p>You Select number: {num1}</p>
        <ButtonCalc name="+" onClick={() => handleOnChangeOperation("+")} />
        <ButtonCalc name="-" onClick={() => handleOnChangeOperation("-")} />
        <ButtonCalc name="/" onClick={() => handleOnChangeOperation("/")} />
        <ButtonCalc name="*" onClick={() => handleOnChangeOperation("*")} />
        <Input type={"number"} name={"Value 2"} onChange={handleOnChangeNum2} />
        <p>You Select number: {num2}</p>
        <span>=</span>
        <ButtonCalc name="Calculate" onClick={calculate} />
        <p className={styles.result}> Your Result: {equal}</p>
        {error && <p>The nominator can not be 0</p>}
      </div>
    </div>
  );
};

export default Calculator;
