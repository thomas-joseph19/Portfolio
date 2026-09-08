import { Project } from "./_schema";
import { planetaryGearProject } from "./planetary-gear";
import { hprL1RocketProject } from "./hpr-l1-rocket";
import { ucfBoatDesignProject } from "./ucf-boat-design";

// Export array of all projects in the portfolio source of truth
export const projects: Project[] = [
  hprL1RocketProject,
  ucfBoatDesignProject,
  planetaryGearProject,
];

export * from "./_schema";
