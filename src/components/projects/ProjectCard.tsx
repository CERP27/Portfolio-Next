import { IProject } from "@/interfaces/projects.interface";
import Link from "next/link";
import Image from "next/image";

import { GithubIcon, WorldWideWebIcon } from "../icons/icons";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { description, id, imageUrl, repoUrl, technologies, title, url } =
    project;
  return (
    <article
      key={id}
      className="rounded-2xl border-2 border-[#8b5cf6]/70 bg-black/50 text-white overflow-hidden shadow-sm transition hover:shadow-lg"
    >
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      <div className="p-4 space-y-4">
        <header>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm opacity-80">{description}</p>
        </header>

        <ul className="flex flex-wrap gap-2 justify-center">
          {technologies.map((tech) => (
            <li
              key={`${id}-${tech}`}
              className="rounded-full border border-[#8b5cf6]/60 bg-[#8b5cf6]/10 px-3 py-1 text-xs cursor-default"
            >
              {tech}
            </li>
          ))}
        </ul>

        <footer className="flex justify-center items-center gap-8 ">
          <Link
            href={repoUrl}
            target="_blank"
            aria-label={`${title} repo`}
            className="p-2 rounded-full border border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/20 transition"
          >
            <GithubIcon />
          </Link>
          <Link
            href={url}
            target="_blank"
            aria-label={`${title} demo`}
            className="p-2 rounded-full border border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/20 transition"
          >
            <WorldWideWebIcon />
          </Link>
        </footer>
      </div>
    </article>
  );
};
