"use client";

import React, { useState } from "react";

const ButtonState = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default ButtonState;
