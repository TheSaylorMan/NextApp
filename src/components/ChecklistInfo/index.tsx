"use client";

import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

export interface IChecklistInfo {
  completed: number;
  total: number;
}

const CheckLinkInfo: React.FC<IChecklistInfo> = ({ completed, total }) => {
  return (
    <div className={styles.checklistinfoholder}>
      <FontAwesomeIcon icon={faListCheck} style={{ fontSize: 20 }} />
      <div>{completed}/{total}</div>
    </div>
  );
};

export default CheckLinkInfo;
