import { GrowExpand, ProjectCard, SlideTitle } from "@/components/motions";

export default function Projects() {
  return (
    <div className="relative min-h-svh w-full flex flex-col overflow-hidden font-nunito-sans">
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
            <span className="text-background dark:text-background font-roboto-mono">
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
            role="Lead Mobile Developer"
            description="A social media and livestreaming platform where users can broadcast live, share video content, and engage through a real-time gifting and digital wallet system."
            tags={[
              "react-native-expo",
              "redux-toolkit",
              "socket.io",
              "axios",
              "stripe",
              "rtmp",
            ]}
            imageSrc="/projects/sicpays.webp"
            alt="Sicpays livestreaming social media platform built with React Native featuring real-time gifting and digital wallet system"
          />

          <ProjectCard
            imagePosition="left"
            title="Spotify-Clone"
            year="Jan 2025 - Feb 2025"
            team="Collaborative (Frontend & Backend)"
            role="Frontend Developer"
            description="A Spotify-inspired music streaming platform featuring real-time playback, dynamic color extraction for themed UI, ElasticSearch for lightning-fast discovery, and Amazon S3-powered media uploads."
            tags={[
              "react-vite",
              "typescript",
              "redux-toolkit",
              "tailwindcss",
              "antd",
              "socket.io",
            ]}
            repoLink="https://github.com/KrivonZa/Spotify-Web"
            liveLink="https://spotify-web-topaz-one.vercel.app/"
            imageSrc="/projects/spotify-clone.webp"
            alt="Spotify clone music streaming web application with real-time playback and dynamic UI built using React and TypeScript"
          />

          <ProjectCard
            imagePosition="right"
            title="EmpowerU"
            year="Jan 2025 - Apr 2025"
            team="SWD392 Team (Academic Project)"
            role="Frontend Developer"
            description="A personalized tutoring platform connecting mentors and students through flexible scheduling, interactive tools, and progress tracking for effective learning."
            tags={[
              "react-vite",
              "antd",
              "stompjs-websocket",
              "bootstrap-5",
              "sass",
            ]}
            imageSrc="/projects/empoweru.webp"
            alt="EmpowerU tutoring platform connecting mentors and students with scheduling and learning progress tracking"
          />

          <ProjectCard
            imagePosition="left"
            title="EduCare"
            year="May 2025 - Jul 2025"
            team="WDP301 Team (Academic Project)"
            role="Full Stack & Mobile Developer"
            description="A specialized school health platform featuring a web portal for medical scheduling and health logs, paired with a mobile app for parents to track their child's health and communicate with school staff."
            tags={[
              "nodejs-express",
              "react-vite",
              "react-native-expo",
              "typescript",
              "mongodb-mongoose",
              "redis-bullmq",
              "socket.io",
            ]}
            repoLink="https://github.com/WDP301-SMMS"
            imageSrc="/projects/educare.webp"
            alt="EduCare school health management platform with web portal and mobile app for parents to track student health records"
          />

          <ProjectCard
            imagePosition="right"
            title="Flipship"
            year="Mar 2025 - Jul 2025"
            team="Startup Team (EXE Project)"
            role="Full Stack & Mobile Developer"
            description="A logistics platform connecting cargo senders with unused storage on passenger buses for a fast, safe, and affordable delivery solution. It helps senders save costs while allowing bus operators to earn extra income."
            tags={[
              "nestjs-prisma",
              "nextjs",
              "astro",
              "react-native-expo",
              "shadcn-ui",
              "postgresql",
              "goong-maps-api",
            ]}
            liveLink="https://flipship.vercel.app/"
            repoLink="https://github.com/Logistic-Flipship"
            imageSrc="/projects/flipship.webp"
            alt="Flipship logistics platform connecting cargo senders with passenger bus storage for affordable delivery"
          />

          <ProjectCard
            imagePosition="left"
            title="B-ShowSell"
            year="Sep 2025 - Jan 2026"
            team="SEP492 Team (Capstone Project)"
            role="Frontend & Mobile Developer"
            description="A unified platform for beauty influencers to manage professional contracts, monitor campaign performance, and run an integrated online store to grow their personal brand."
            tags={[
              "react-vite",
              "react-native-expo",
              "ffmpeg-wasm",
              "tiptap-editor",
              "speech-recognition",
              "server-sent-events-sse",
              "pwa-integration",
            ]}
            repoLink="https://github.com/SEP490-Project"
            imageSrc="/projects/bshowsell.webp"
            alt="B-ShowSell influencer platform for managing beauty brand contracts, campaign analytics, and integrated online store"
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
