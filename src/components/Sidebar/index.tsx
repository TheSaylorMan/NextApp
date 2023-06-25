'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faBarsProgress,
  faCalendarDays,
  faChartSimple,
  faGrip,
  faStopwatch
} from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faComments } from '@fortawesome/free-regular-svg-icons';
import styles from './index.module.scss';
import Icon from '../Icon';
import { usePathname } from 'next/navigation';
import { routes } from '@/res/routes';

const Sidebar = () => {
  const pathname = usePathname();
  
  const iconList = [
    {
      title: "Dasboard",
      url: routes.dashboard.root,
      icon: <FontAwesomeIcon
        icon={faGrip}
        style={{ fontSize: 20 }}
      />
    },
    {
      title: "Projects",
      url: routes.projects.root,
      icon: <FontAwesomeIcon
        icon={faBarsProgress}
        style={{ fontSize: 20 }}
      />
    },
    {
      title: "Time Sheets",
      url: routes.timeSheets.root,
      icon: <FontAwesomeIcon
        icon={faStopwatch}
        style={{ fontSize: 20 }}
      />
    },
    {
      title: "Calendar",
      url: routes.calendar.root,
      icon: <FontAwesomeIcon
        icon={faCalendarDays}
        style={{ fontSize: 20 }}
      />
    },
    {
      title: "Reports",
      url: routes.reports.root,
      icon: <FontAwesomeIcon
        icon={faChartSimple}
        style={{ fontSize: 20 }}
      />
    },
    {
      title: "Chat",
      url: routes.chat.root,
      icon: <FontAwesomeIcon
        icon={faComments}
        style={{ fontSize: 20 }}
      />
    },
    {
      title: "Support",
      url: routes.support.root,
      icon: <FontAwesomeIcon
        icon={faCircleQuestion}
        style={{ fontSize: 20 }}
      />
    },
    {
      title: "Log out",
      icon: <FontAwesomeIcon
        icon={faArrowRightFromBracket}
        style={{ fontSize: 20 }}
      />
    },
  ]

  return <div className={styles.sidebar}>
    {iconList.map((icon, index) => 
      <Icon
        key={index}
        title={icon.title}
        href={icon.url}
        active={icon.url ? pathname.split('/')[2] === icon.url?.split('/')[2] : false}
      >
        {icon.icon}
      </Icon>
      )}
  </div>

}

export default Sidebar;