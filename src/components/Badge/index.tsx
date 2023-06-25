"use client";

import React from "react";
import styles from "./index.module.scss";

export interface IBadge {
    title: string;
    theme?: string;
}

const Badge: React.FC<IBadge> = ({title, theme = "neutral"}) => {
    return <div className={styles.badge}>{title}</div>
}

export default Badge;