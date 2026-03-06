"use client";

import {
  GrowExpand,
  ProjectCard,
  SlideTitle,
} from "@/components/motions";

export default function Projects() {
  return (
    <div className="relative min-h-svh w-full flex flex-col overflow-hidden font-nunito-sans bg-background">
      {/* Header (Matching Experience) */}
      <div className="w-full pt-12 md:pt-20 px-6 md:px-20 flex items-end justify-end z-10">
        <div className="flex flex-col items-end">
          <SlideTitle
            direction="right"
            baseColor="bg-primary"
            className="text-4xl md:text-7xl font-black uppercase tracking-widest"
          >
            <span className="text-background dark:text-background">
              Projects
            </span>
          </SlideTitle>
          <GrowExpand
            direction="left"
            size="120px"
            className="h-2 bg-foreground mt-2"
          />
        </div>
      </div>

      {/* Projects Container */}
      <div className="flex-1 w-full flex flex-col items-center py-5 md:py-10 px-6 z-10">
        <div className="w-full max-w-7xl space-y-10 md:space-y-12">
          {/* Project 1: Image on Right */}
          <ProjectCard
            imagePosition="right"
            title="Sicpays"
            year="Oct 2024 - Dec 2024"
            team="Amazing Tech Mobile team"
            description="An art hosting site where artists can upload their work, and make a personalized portfolio to showcase their work in a meaningful way."
            tags={[
              "react",
              "redux",
              "tailwindcss",
              "express",
              "mongodb",
              "cloudinary",
            ]}
            imageSrc="/projects/sicpays.png"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="left"
            title="Spotify-Clone"
            year="Jan 2025 - Feb 2025"
            team="Solo Project"
            description="A stack-overflow clone for developers to ask questions and share knowledge with a focus on clean UI."
            tags={["nextjs", "typescript", "clerk", "mongodb", "shadcn"]}
            imageSrc="/projects/spotify-clone.png"
            repoLink="#"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="right"
            title="EmpowerU"
            year="Jan 2025 - Apr 2025"
            team="artsu.me team"
            description="An art hosting site where artists can upload their work, and make a personalized portfolio to showcase their work in a meaningful way."
            tags={[
              "react",
              "redux",
              "tailwindcss",
              "express",
              "mongodb",
              "cloudinary",
            ]}
            imageSrc="/projects/empoweru.png"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="left"
            title="EduCare"
            year="May 2025 - Jul 2025"
            team="Solo Project"
            description="A stack-overflow clone for developers to ask questions and share knowledge with a focus on clean UI."
            tags={["nextjs", "typescript", "clerk", "mongodb", "shadcn"]}
            imageSrc="/projects/educare.png"
            repoLink="#"
            liveLink="#"
          />

          {/* Project 2: Image on Left */}
          <ProjectCard
            imagePosition="right"
            title="Flipship"
            year="Mar 2025 - Jul 2025"
            team="Solo Project"
            description="A stack-overflow clone for developers to ask questions and share knowledge with a focus on clean UI."
            tags={["nextjs", "typescript", "clerk", "mongodb", "shadcn"]}
            imageSrc="/projects/flipship.png"
            repoLink="#"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="left"
            title="B-ShowSell"
            year="Sep 2025 - Jan 2026"
            team="artsu.me team"
            description="An art hosting site where artists can upload their work, and make a personalized portfolio to showcase their work in a meaningful way."
            tags={[
              "react",
              "redux",
              "tailwindcss",
              "express",
              "mongodb",
              "cloudinary",
            ]}
            imageSrc="/projects/bshowsell.png"
            liveLink="#"
          />
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-4 right-6 opacity-5 select-none pointer-events-none">
        <span className="text-8xl md:text-[12rem] font-black text-foreground uppercase tracking-tighter">
          Built
        </span>
      </div>
    </div>
  );
}
