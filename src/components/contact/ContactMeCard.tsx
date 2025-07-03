import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "../icons/icons";

interface ContactMeCardProps {
  linkedInUrl: string;
  githubUrl: string;
  email: string;
}

export const ContactMeCard = ({
  email,
  githubUrl,
  linkedInUrl,
}: ContactMeCardProps) => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl p-6 dark:text-white w-xs sm:w-sm md:w-lg text-center mb-8">
      <h3 className="text-2xl font-semibold mb-2">Let&apos;s Connect!</h3>
      <p className="text-gray-300 text-sm mb-4">
        You can reach out through my socials or send me a direct message using
        the form below.
      </p>
      <div className="flex justify-center gap-6 items-center">
        <Link
          href={linkedInUrl}
          target="_blank"
          className="hover:text-blue-400 transition-colors"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          className="hover:text-gray-400 transition-colors"
        >
          <GithubIcon />
        </Link>
        <Link
          href={`mailto:${email}`}
          className="hover:text-purple-400 transition-colors"
        >
          <MailIcon />
        </Link>
      </div>
    </div>
  );
};
