"use client";

import React from "react";
import styles from "./index.module.scss";
import UsersGroup from "../UsersGroup";
import { IUserAvatar } from "../UserAvatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMessage, faPaperclip } from "@fortawesome/free-solid-svg-icons";

export interface ITaskCardFooter {
  users: IUserAvatar[];
  watchers: number;
  comments: number;
  attatchements: number;
}

const TaskCardFooter: React.FC<ITaskCardFooter> = ({
  users,
  watchers,
  comments,
  attatchements,
}) => {
  return (
    <div className={styles.taskCardFooter}>
      <div className={styles.iconList}>
        <UsersGroup users={users} />
      </div>
      <div className={styles.iconHolder}>
        <div>
          <FontAwesomeIcon icon={faEye} style={{ fontSize: 20 }} />
          {watchers}
        </div>
        
        <div><FontAwesomeIcon icon={faMessage} style={{ fontSize: 20 }} />{comments}</div>
        
        <div><FontAwesomeIcon icon={faPaperclip} style={{ fontSize: 20 }} />{attatchements}</div>
      </div>
    </div>
  );
};

export default TaskCardFooter;
