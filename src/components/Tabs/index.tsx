'use client';

import React, { ReactNode, useState } from 'react';
import styles from './index.module.scss';
import Tab, { ITab } from '../Tab';

interface ITabs {
  tabList: Partial<ITab>[];
  children: ReactNode[];
}

const Tabs: React.FC<ITabs> = ({tabList, children}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return <div className={styles.tabs}>
    <div className={styles.tabsHolder}>
      {
        tabList.map((tab, index) => <Tab key={index} title={tab.title!} count={tab.count} active={activeTab === index} onClick={() => setActiveTab(index)} />)
      }
    </div>
    <div className={styles.tabContent}>
      {children}
    </div>
  </div>;
}

export default Tabs;
