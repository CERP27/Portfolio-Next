"use client";
import { ISkill, SkillType } from "@/interfaces/skills.interface";
import { SkillContainer } from "./SkillContainer";
import { ArrowDownIcon } from "../icons/icons";

interface SkillSectionProps {
  skills: Record<string, ISkill[]>;
}

export const SkillSection = ({ skills }: SkillSectionProps) => {
  const skillTypes = Object.keys(SkillType);
  return (
    <section
      id="skills"
      className="h-fit flex flex-col text-center pt-24 pb-10 px-8"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-white">Skills</p>
        <p className="items-center w-24 h-2 rounded-full bg-[#8b5cf6] mb-20" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-4 lg:px-8">
        {skillTypes.map((type) => (
          <SkillContainer key={type} title={type} skills={skills[type]} />
        ))}
      </div>
      <ArrowDownIcon classname="pt-32 m-auto" />
    </section>
  );
};
