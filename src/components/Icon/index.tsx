'use client';

import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

interface IIcon {
  title: string;
  active?: boolean;
  onClick?: any;
  href?: string;
  children: React.ReactNode;
}

const Icon: React.FC<IIcon> = ({title, children, active, onClick, href}) => {
  if (href) {
    return <Link className={`${styles.icon} ${active && styles.active}`} href={href} title={title}>{children}</Link>
  } else {
    return <button className={`${styles.icon} ${active && styles.active}`} onClick={onClick} title={title}>{children}</button>
  }
}

export default Icon;