'use client';

import React from "react";
import styles from './index.module.scss';

export interface ITaskCard {
  title: string;
  description?: string;
  date?: string | Date;
  assignee?: string;
}

const TaskCard: React.FC<ITaskCard> = ({title, description, date, assignee}) => {
  return <div className={styles.taskCard}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <div className={styles.details}>
      <time>{date?.toString()}</time>
      <span>{assignee}</span>
    </div>
  </div>
}

export default TaskCard;