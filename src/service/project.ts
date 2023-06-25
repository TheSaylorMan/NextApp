import { api } from "./client";

export async function getProjects () {
    return api.get<any>('/projects')    
}