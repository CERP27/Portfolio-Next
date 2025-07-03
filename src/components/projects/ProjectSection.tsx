"use client";
import { IProject } from "@/interfaces/projects.interface";
import { ArrowDownIcon } from "../icons/icons";

import { ProjectCard } from "./ProjectCard";

interface ProjectSectionProps {
  projects: IProject[];
}

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section
      id="projects"
      className="h-fit bg-white/2 flex flex-col items-center text-center pt-24 pb-10 sm:px-8"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-white">Projects</p>
        <p className="items-center w-26 h-2 rounded-full bg-[#8b5cf6] mb-20" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-2 sm:px-4 lg:px-8">
        {projects.map((project) => (
          <ProjectCard
            key={`${project.id}-${project.title}`}
            project={project}
          />
        ))}
      </div>
      <ArrowDownIcon classname="pt-32 m-auto" />
    </section>
  );
};
