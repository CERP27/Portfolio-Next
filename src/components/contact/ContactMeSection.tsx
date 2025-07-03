"use client";

import { ContactMeCard } from "./ContactMeCard";
import { ContactMeForm } from "./ContactMeForm";

interface ContactMeSectionProps {
  linkedInUrl: string;
  githubUrl: string;
  email: string;
}
export const ContactMeSection = ({
  githubUrl,
  linkedInUrl,
  email,
}: ContactMeSectionProps) => {
  return (
    <section
      id="contact"
      className="h-fit flex flex-col items-center text-center pt-24 pb-10 sm:px-8"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-white">Contact Me</p>
        <p className="items-center w-34 h-2 rounded-full bg-[#8b5cf6] mb-20" />
      </div>
      <ContactMeCard
        email={email}
        githubUrl={githubUrl}
        linkedInUrl={linkedInUrl}
      />
      <ContactMeForm />
    </section>
  );
};
