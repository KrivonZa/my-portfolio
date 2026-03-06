"use client";

import { ScrollFade, GrowExpand, SlideTitle } from "@/components/motions";

export default function About() {
  return (
    <div className="relative min-h-svh w-full grid grid-cols-1 md:grid-cols-4 items-start md:items-center overflow-hidden font-nunito-sans bg-background py-10 md:py-0.5">
      {/* LEFT BACKGROUND (Gradient Background) */}
      <div className="relative h-full col-span-1 hidden md:block overflow-hidden">
        <ScrollFade
          direction="left"
          className="h-full w-full animated-background 
            bg-linear-to-br from-blue-400 via-primary to-cyan-400 
            dark:from-blue-900 dark:via-primary dark:to-indigo-950
            opacity-90"
        />

        <div className="absolute top-0 left-8 flex flex-col items-center">
          <GrowExpand
            direction="down"
            size="180px"
            className="w-3 bg-foreground shadow-2xl"
          />
          <span className="text-4xl font-black text-foreground mt-4 tracking-tighter">
            001
          </span>
        </div>
      </div>

      {/* RIGHT BACKGROUND (Theme Background) */}
      <div className="order-1 md:order-0 h-full col-span-1 md:col-span-3 bg-background relative flex flex-col justify-center px-4 sm:px-6 md:pl-32 md:pr-12 lg:pl-48 pt-4 md:pt-0">
        <div className="mb-8 md:mb-12 text-left md:text-left">
          <SlideTitle
            direction="right"
            baseColor="bg-primary"
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-wide md:tracking-widest"
          >
            <span className="text-white dark:text-background">About Me</span>
          </SlideTitle>
        </div>

        {/* CONTENT CARD */}
        <div className="hidden md:block">
          <ScrollFade direction="left">
            <div className="relative z-10 bg-card/80 dark:bg-card/40 backdrop-blur-md p-5 sm:p-6 md:p-10 border border-border shadow-2xl max-w-3xl rounded-sm">
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
                <p>
                  Hello there! 👋 I&apos;m{" "}
                  <span className="text-primary font-bold">Truong Tan Dung</span>,
                  a Software Engineering graduate with a knack for turning
                  complex ideas into seamless digital reality.
                </p>

                <p>
                  I thrive on the thrill of building from the ground up—whether
                  it&apos;s architecting robust backends or crafting intuitive mobile
                  experiences. For me, great software isn&apos;t just about code;
                  it&apos;s about creating solutions that feel &quot;just right&quot; for the
                  user.
                </p>

                <p>
                  My core expertise lies in{" "}
                  <span className="text-foreground font-semibold underline decoration-primary underline-offset-4">
                    JavaScript, Full-stack development, and Mobile apps
                  </span>
                  . I also enjoy leading small teams to ship high-quality
                  projects.
                </p>

                <p className="text-xs md:text-sm italic pt-2 opacity-80 border-t border-border mt-4">
                  Beyond the terminal, you&apos;ll find me trading screen time for
                  playing games 🎮, day dreaming 💭, or brainstorming my next
                  side project over a cold Vietnamese white coffee ☕.
                </p>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>

      {/* PORTRAIT IMAGE */}
      <div className="order-2 md:order-0 relative z-20 w-full flex justify-center mt-10 mb-6 md:my-0 md:w-auto md:block md:absolute md:top-1/2 md:left-[25%] md:-translate-x-1/2 md:-translate-y-1/2">
        <ScrollFade direction="up">
          <div className="relative group">
            <div className="w-44 sm:w-52 md:w-72 lg:w-80 aspect-2/3 bg-muted border-4 md:border-[6px] border-card shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-linear-to-b from-primary/20 to-primary/40 flex items-center justify-center">
                <span className="text-foreground/50 font-bold italic">
                  4 x 6 Image
                </span>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
      <div className="order-3 md:hidden px-4 sm:px-6 pb-8">
        <ScrollFade direction="left">
          <div className="relative z-10 bg-card/80 dark:bg-card/40 backdrop-blur-md p-5 sm:p-6 border border-border shadow-2xl rounded-sm">
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed font-medium">
              <p>
                Hello there! 👋 I&apos;m{" "}
                <span className="text-primary font-bold">Truong Tan Dung</span>,
                a Software Engineering graduate with a knack for turning complex
                ideas into seamless digital reality.
              </p>

              <p>
                I thrive on the thrill of building from the ground up—whether
                it&apos;s architecting robust backends or crafting intuitive mobile
                experiences. For me, great software isn&apos;t just about code; it&apos;s
                about creating solutions that feel &quot;just right&quot; for the user.
              </p>

              <p>
                My core expertise lies in{" "}
                <span className="text-foreground font-semibold underline decoration-primary underline-offset-4">
                  JavaScript, Full-stack development, and Mobile apps
                </span>
                . I also enjoy leading small teams to ship high-quality
                projects.
              </p>

              <p className="text-xs italic pt-2 opacity-80 border-t border-border mt-4">
                Beyond the terminal, you&apos;ll find me trading screen time for
                playing games 🎮, day dreaming 💭, or brainstorming my next side
                project over a cold Vietnamese white coffee ☕.
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
      <div className="absolute bottom-0 right-8 hidden md:flex flex-col items-center">
        <span className="text-4xl font-black text-background mt-4 tracking-tighter">
          001
        </span>
        <GrowExpand
          direction="up"
          size="180px"
          className="w-3 bg-foreground shadow-2xl"
        />
      </div>
      <div className="absolute top-4 left-4 md:hidden">
        <span className="text-2xl sm:text-3xl font-black text-primary/30">001</span>
      </div>
      <div className="absolute bottom-2 right-3 md:bottom-4 md:right-6 opacity-5 select-none pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-[15rem] font-black text-foreground uppercase tracking-tighter">
          Intro
        </span>
      </div>
    </div>
  );
}