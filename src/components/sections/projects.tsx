"use client";

import { GrowExpand, ProjectCard, SlideTitle } from "@/components/motions";

export default function Projects() {
  return (
    <div className="relative min-h-svh w-full flex flex-col overflow-hidden font-nunito-sans bg-background">
      <div className="absolute top-0 left-8 hidden md:flex flex-col items-center">
        <GrowExpand
          direction="down"
          size="120px"
          className="w-3 grow-projects shadow-2xl"
        />
        <span className="text-4xl font-black section-index-projects mt-4 tracking-tighter">
          011
        </span>
      </div>

      <div className="absolute top-4 left-4 md:hidden z-20">
        <span className="text-2xl sm:text-3xl font-black section-index-projects">
          011
        </span>
      </div>

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
            className="h-2 grow-projects mt-2"
          />
        </div>
      </div>

      {/* Projects Container */}
      <div className="flex-1 w-full flex flex-col items-center py-5 md:py-10 px-6 z-10">
        <div className="w-full max-w-7xl space-y-10 md:space-y-12">
          <ProjectCard
            imagePosition="right"
            title="Sicpays"
            year="Oct 2024 - Dec 2024"
            team="Amazing Tech Mobile team"
            description="A social media and livestreaming platform where users can broadcast live, share video content, and engage through a real-time gifting and digital wallet system."
            tags={[
              "react-native-expo",
              "redux-toolkit",
              "socket.io",
              "axios",
              "stripe",
              "rtmp",
            ]}
            imageSrc="/projects/sicpays.png"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="left"
            title="Spotify-Clone"
            year="Jan 2025 - Feb 2025"
            team="Collaborative (Frontend & Backend)"
            description="A Spotify-inspired music streaming platform featuring real-time playback, dynamic color extraction for themed UI, ElasticSearch for lightning-fast discovery, and Amazon S3-powered media uploads."
            tags={[
              "react",
              "typescript",
              "redux-toolkit",
              "tailwindcss",
              "antd",
              "vite",
              "socket.io",
              "color-extraction",
            ]}
            imageSrc="/projects/spotify-clone.png"
            repoLink="#"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="right"
            title="EmpowerU"
            year="Jan 2025 - Apr 2025"
            team="SWD392 Team (Academic Project)"
            description="An art hosting site where artists can upload their work, and make a personalized portfolio to showcase their work in a meaningful way."
            tags={[
              "react",
              "vite",
              "antd",
              "stompjs-websocket",
              "fullcalendar",
              "bootstrap-5",
              "sass",
              "jwt-auth",
            ]}
            imageSrc="/projects/empoweru.png"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="left"
            title="EduCare"
            year="May 2025 - Jul 2025"
            team="WDP301 Team (Academic Project)"
            description="A stack-overflow clone for developers to ask questions and share knowledge with a focus on clean UI."
            tags={[
              "nodejs-express",
              "react-js",
              "react-native-expo",
              "typescript",
              "mongodb-mongoose",
              "redis-bullmq",
              "socket.io",
            ]}
            imageSrc="/projects/educare.png"
            repoLink="#"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="right"
            title="Flipship"
            year="Mar 2025 - Jul 2025"
            team="Startup Team (EXE Project)"
            description="A stack-overflow clone for developers to ask questions and share knowledge with a focus on clean UI."
            tags={[
              "nestjs-prisma-postgresql",
              "nextjs-shadcn-ui",
              "astro-landing-page",
              "react-native-expo",
              "aws-s3-storage",
              "payos-integration",
              "socket.io-realtime",
              "goong-maps-api",
            ]}
            imageSrc="/projects/flipship.png"
            repoLink="#"
            liveLink="#"
          />

          <ProjectCard
            imagePosition="left"
            title="B-ShowSell"
            year="Sep 2025 - Jan 2026"
            team="SEP492 Team (Capstone Project)"
            description="An art hosting site where artists can upload their work, and make a personalized portfolio to showcase their work in a meaningful way."
            tags={[
              "react-19-vite-7",
              "expo-54",
              "ffmpeg-wasm",
              "tiptap-editor",
              "speech-recognition",
              "server-sent-events-sse",
              "pwa-integration",
              "husky-lint-staged",
            ]}
            imageSrc="/projects/bshowsell.png"
            liveLink="#"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-8 hidden md:flex flex-col items-center">
        <span className="text-4xl font-black text-background mt-4 tracking-tighter">
          011
        </span>
        <GrowExpand
          direction="up"
          size="180px"
          className="w-3 grow-projects shadow-2xl"
        />
      </div>

      {/* Subtle background text decoration */}
      <div className="absolute bottom-4 right-6 opacity-5 select-none pointer-events-none">
        <span className="text-8xl md:text-[12rem] font-black text-foreground uppercase tracking-tighter">
          Built
        </span>
      </div>
    </div>
  );
}
