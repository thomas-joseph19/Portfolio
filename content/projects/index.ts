import { Project } from "./_schema";
import { planetaryGearProject } from "./planetary-gear";

// Export array of all projects in the portfolio source of truth
export const projects: Project[] = [
  planetaryGearProject,
];

export * from "./_schema";
