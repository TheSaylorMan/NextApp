import React from "react";
import styles from "./projects.module.scss";
import BasicProjectCard from "@/components/BasicProjectCard";
import TicketCard from "@/components/TicketCard";
import useProjects from "@/hooks/useProjects";
import { getProjects } from "@/service/project";

async function fetchProjects() {
  return await getProjects();
}

const Projects = async () => {
  const { data: projectList } = await fetchProjects();

  const badgeDetails = {
    title: "Ux Stages",
  };

  const textDetails = {
    title: "Wire Framing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  };

  const checklistInfo = {
    completed: 3,
    total: 2,
  };

  const taskCardInfo = {
    users: [
      {
        name: "Vitor Monteiro",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-368-456320.png",
      },
      {
        name: "Bruno Pereira",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-368-456320.png",
      },
      {
        name: "Catarina Tavares",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-368-456320.png",
      },
    ],
    watchers: 3,
    comments: 0,
    attatchements: 0,
  };

  return (
    <div className={styles.projectsGrid}>
      <div className={styles.infoColumn}>
        <h1>Projects</h1>
        <div className={styles.projectList}>
          {projectList.slice(0, 4).map((project: any, index: number) => (
            <BasicProjectCard
              key={index}
              title={project.name}
              id={project.id}
            />
          ))}
        </div>
      </div>
      <div>
        <p>Search Bar</p>
        <div className={styles.projectDetails}>
          <TicketCard
            badge={badgeDetails}
            {...textDetails}
            checklistInfo={checklistInfo}
            taskCardFooter={taskCardInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
