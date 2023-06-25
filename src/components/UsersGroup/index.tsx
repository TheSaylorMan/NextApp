"use client";

import React from "react";
import styles from "./index.module.scss";
import UserAvatar, { IUserAvatar } from "../UserAvatar";

interface IUsersGroup {
    users: IUserAvatar[];
}

const UsersGroup: React.FC<IUsersGroup> = ({users}) => {
    return <div className={styles.userGroup}>
        {
            users.slice(0, users.length > 4 ? 3 : 4).map((user, index) => 
            <UserAvatar key={index} name={user.name} icon={user.icon} url={user.url} />)
        }
    </div>
}

export default UsersGroup;
