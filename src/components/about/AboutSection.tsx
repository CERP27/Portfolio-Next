"use client";
import Image from "next/image";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

interface AboutSectionProps {
  description: string[];
}

export const AboutSection = ({ description }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="min-h-fit pt-20 sm:pt-38 bg-white/2 flex flex-col items-center text-gray-100"
    >
      <div className="container m-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/carlos-rojas.png"
            alt="Carlos Rojas Portrait"
            width="1000"
            height="1000"
            className="w-65 h-65 sm:w-80 sm:h-80 lg:w-100 lg:h-100 rounded-full text-white"
          />
        </div>

        <div>
          <div className="pb-8">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="w-35.5 h-2 rounded-full bg-[#8b5cf6] mb-4" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-gray-300">
            {description.map((paragraph, idx) => (
              <p key={idx - paragraph.length} className="break-words">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ArrowDownIcon classname="pt-30 pb-16" />
    </section>
  );
};
