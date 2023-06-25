import React from 'react';
import styles from './index.module.scss';

export interface ITab {
  title: string;
  count?: number;
  active?: boolean;
  onClick: any;
}

const Tab: React.FC<ITab> = ({title, count = 0, active = false, onClick}) => {
  return <button className={`${styles.tab} ${active && styles.active}`} onClick={onClick}>
    <p>{title}</p>
    {count > 0 && <span>{count}</span>}
  </button>
}

export default Tab;
