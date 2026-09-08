import { Project } from "./_schema";
import { planetaryGearProject } from "./planetary-gear";
import { hprL1RocketProject } from "./hpr-l1-rocket";

// Export array of all projects in the portfolio source of truth
export const projects: Project[] = [
  hprL1RocketProject,
  planetaryGearProject,
];

export * from "./_schema";
