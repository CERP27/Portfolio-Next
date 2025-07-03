export const dynamic = "force-static";

import { AboutSection } from "@/components/about/AboutSection";
import { ContactMeSection } from "@/components/contact/ContactMeSection";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { Navbar } from "@/components/navbar/Navbar";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { SkillSection } from "@/components/skills/SkillsSection";
import { IProject } from "@/interfaces/projects.interface";
import { ISkill, SkillType } from "@/interfaces/skills.interface";
import { prismaClient } from "@/lib/prisma";

const Home = async () => {
  const personalData = await prismaClient.personalData.findFirst({
    include: {
      skills: true,
      projects: true,
    },
  });

  const groupedSkills = personalData!.skills.reduce<Record<string, ISkill[]>>(
    (skills, { name, logo, type }) => {
      if (!skills[type]) {
        skills[type] = [];
      }
      skills[type].push({
        logo,
        name,
        type: type as SkillType,
      });
      return skills;
    },
    {}
  );
  
  const projects: IProject[] = personalData!.projects.map(
    ({ title, description, url, repoUrl, imageUrl, technologies, id }) => {
      return {
        id,
        description,
        imageUrl,
        technologies,
        title,
        url,
        repoUrl,
      };
    }
  );

  return (
    <div className="min-h-screen items-center justify-items-center ">
      <Navbar />

      <main id="welcome" className="flex flex-col pb-4">
        <HeroSection name={personalData!.name} />

        <AboutSection description={personalData!.about} />

        <SkillSection skills={groupedSkills} />

        <ProjectSection projects={projects} />

        <ContactMeSection
          email={personalData!.email}
          githubUrl={personalData!.github}
          linkedInUrl={personalData!.linkedin}
        />
      </main>
      <Footer
        email={personalData!.email}
        github={personalData!.github}
        linkedin={personalData!.linkedin}
      />
    </div>
  );
};

export default Home;
