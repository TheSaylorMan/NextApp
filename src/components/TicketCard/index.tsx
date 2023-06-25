"use client";

import React from "react";
import styles from "./index.module.scss";
import Badge, { IBadge } from "../Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import CheckLinkInfo, { IChecklistInfo } from "../ChecklistInfo";
import TaskCardFooter, { ITaskCardFooter } from "../TaskCardFooter";
import { ITaskCard } from "../TaskCard";

export interface ITicketCard {
  badge: IBadge;
  title: string;
  description: string;
  checklistInfo: IChecklistInfo;
  taskCardFooter: ITaskCardFooter;
}

const TicketCard: React.FC<ITicketCard> = ({
  badge,
  title,
  description,
  checklistInfo,
  taskCardFooter,
}) => {
  return (
    <div className={styles.ticketCardHolder}>
      <div className={styles.badgeHolder}>
        <div>
          <Badge {...badge} />
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisVertical} style={{ fontSize: 20 }} />
        </div>
      </div>
      <div className={styles.textArea}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <CheckLinkInfo {...checklistInfo} />
      </div>
      <div className={styles.taskCardFooter}>
        <TaskCardFooter {...taskCardFooter} />
      </div>
    </div>
  );
};

export default TicketCard;
