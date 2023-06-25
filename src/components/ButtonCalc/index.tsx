"use client";

import React from "react";

export interface IButtonCalc {
    onClick: any;
    name: string;
}

const ButtonCalc: React.FC<IButtonCalc> = ({onClick, name}) => {
 return <button onClick={onClick}>{name}</button>

}

export default ButtonCalc