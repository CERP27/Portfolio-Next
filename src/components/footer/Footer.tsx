"use client";
import { GithubIcon, LinkedinIcon, MailIcon } from "../icons/icons";

interface FooterProps {
  email: string;
  github: string;
  linkedin: string;
}

export const Footer = ({ email, github, linkedin }: FooterProps) => {
  return (
    <footer className="absolute bottom w-full bg-black flex flex-wrap justify-center gap-4 items-center text-white py-4 px-4 text-center">
      <div className="flex items-center gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <GithubIcon />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <LinkedinIcon />
        </a>
        <a
          href={`mailto:${email}?subject=Contact%20from%20portfolio`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <MailIcon />
        </a>
      </div>
      <p className="text-xs">
        © {new Date().getFullYear()} Carlos Rojas. All rights reserved.
      </p>
    </footer>
  );
};
