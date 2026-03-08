import {
  ContentCard,
  GrowExpand,
  ScrollFade,
  SlideTitle,
} from "@/components/motions";

export default function Experience() {
  const amazingTechDesc = [
    "Lead Mobile Developer | Sep 2024 - Dec 2024",
    "Led a team of 3 to architect and ship a React Native social platform (Sicpays).",
    "Built high-performance RTMP livestreaming and reels-style video interactions.",
    "Optimized state management for real-time gifting and intelligent media caching.",
    "Integrated full-cycle Stripe monetization for premium user transactions.",
    "Specialized in scalable mobile architecture for high-performance device tiers.",
  ];

  return (
    <div className="relative h-svh w-full flex flex-col overflow-hidden font-nunito-sans bg-background">

      <div className="absolute top-0 right-8 hidden md:flex flex-col items-center">
        <GrowExpand
          direction="down"
          size="180px"
          className="w-3 grow-experience shadow-2xl"
        />
        <span className="text-4xl font-black section-index-experience mt-4 tracking-tighter">
          010
        </span>
      </div>

      <div className="absolute top-4 left-4 md:hidden z-20">
        <span className="text-2xl sm:text-3xl font-black section-index-experience">010</span>
      </div>

      <div className="w-full pt-12 md:pt-20 px-6 md:px-20">
        <div className="flex flex-col items-start">
          <SlideTitle
            direction="left"
            baseColor="bg-primary"
            className="text-4xl md:text-7xl font-black uppercase tracking-widest"
          >
            <span className="text-background dark:text-background font-roboto-mono">
              Experience
            </span>
          </SlideTitle>
          <GrowExpand
            direction="right"
            size="120px"
            className="h-2 grow-experience mt-2"
          />
        </div>
      </div>

      {/* CONTENT CARD */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-12">
        <ScrollFade direction="up" delay={200} className="w-full max-w-6xl">
          <div className="relative h-[45svh] w-full sm:h-[52svh] md:h-auto md:aspect-21/9 lg:aspect-3/1">
            <ContentCard
              imageSrc="/companies/amazing.png"
              title="Amazing Tech"
              description={amazingTechDesc}
              alt="Amazing Tech company logo"
            />
          </div>
        </ScrollFade>
      </div>

      <div className="absolute bottom-0 left-8 hidden md:flex flex-col items-center">
        <span className="text-4xl font-black text-background mt-4 tracking-tighter">
          010
        </span>
        <GrowExpand
          direction="up"
          size="180px"
          className="w-3 grow-experience shadow-2xl"
        />
      </div>

      {/* Subtle background text decoration */}
      <div className="absolute bottom-4 left-6 opacity-5 select-none pointer-events-none">
        <span className="text-8xl md:text-[15rem] font-black text-foreground uppercase tracking-tighter">
          Work
        </span>
      </div>
    </div>
  );
}
