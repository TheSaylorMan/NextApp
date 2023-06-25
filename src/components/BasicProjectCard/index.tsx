'use client';

import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { routes } from '@/res/routes';

interface IBasicProjectCard {
  title: string;
  icon?: string;
  id: string;
}

const BasicProjectCard: React.FC<IBasicProjectCard> = ({title, icon, id}) => {
  return <Link className={styles.basicProjectCard} href={routes.projects.singleProject(id)} title={title}>
    <div className={styles.iconTitleHolder}>
      <div className={styles.square}></div>
      <h5>{title}</h5>
    </div>
    <FontAwesomeIcon
        icon={faEllipsisVertical}
        style={{ fontSize: 20 }}
      />
  </Link>
}

export default BasicProjectCard;