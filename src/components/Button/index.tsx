'use client';

import React from "react";
import styles from './index.module.scss';

interface IButton {
  icon?: string;
  text: string;
  theme?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButton> = ({icon, text, theme = "primary", onClick, type = "button"}) => {
  return <button type={type} onClick={onClick} className={`${styles.button} ${styles[theme]}`}>{text}</button>
}

export default Button;