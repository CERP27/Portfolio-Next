import { ISkill } from "@/interfaces/skills.interface";
import Image from "next/image";

interface SkillContainerProps {
  title: string;
  skills: ISkill[];
}

export const SkillContainer = ({ skills, title }: SkillContainerProps) => {
  return (
    <div className="min-h-fit w-full border-3 border-[#8b5cf6] rounded-2xl text-[#d1c4e9]">
      <p className="py-4 font-semibold bg-white/20 rounded-t-xl">{title}</p>
      <div className="w-full flex flex-wrap gap-6 justify-center items-center pt-6 pb-6">
        {skills.map(({ name, logo }) => (
          <div
            key={name}
            className="w-32 rounded-xl bg-white/10 flex flex-col py-4 items-center"
          >
            <Image
              alt={`${name}-icon`}
              src={`/icon/${logo}-icon.svg`}
              width={42}
              height={42}
            />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
