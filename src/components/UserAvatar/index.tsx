"use client";

import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface IUserAvatar {
    name: string;
    icon: string;
    url?: string;
}

const UserAvatar: React.FC<IUserAvatar>  = ({icon, url, name}) => {
    return <Link href={url ?? ""}><div className={styles.useravatar}>
    <img className={styles.img} src={icon} alt={name}/>
    </div></Link>
};

export default UserAvatar;
