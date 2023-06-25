import React from "react";
import { useParams } from "next/navigation";
import { getProjects } from "@/service/project";

async function fetchProjects() {
  return await getProjects();
}

const SingleProject = () => {
  const params = useParams();

  return <h1>Single Project # {params.id}</h1>;
};

export default SingleProject;
