import { ProjectContribution } from "./project-contribution";

export interface Project {
    id: number;
    imageUrl: string;
    videoUrl: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    developmentDescription: string;
    externalUrl: string;
    contributions: string[];
}