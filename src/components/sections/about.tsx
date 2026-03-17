import Image from "next/image";
import { ScrollFade, GrowExpand, SlideTitle } from "@/components/motions";

export default function About() {
  return (
    <div className="relative min-h-svh w-full grid grid-cols-1 md:grid-cols-4 items-start md:items-center overflow-hidden font-nunito-sans bg-background py-10 md:py-[0.1px]">
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
            className="w-3 grow-about shadow-2xl"
          />
          <span className="text-4xl font-black section-index-about mt-4 tracking-tighter">
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
            <span className="text-white dark:text-background font-roboto-mono">
              About Me
            </span>
          </SlideTitle>
        </div>

        {/* CONTENT CARD */}
        <div className="hidden md:block">
          <ScrollFade direction="left">
            <div className="relative z-10 bg-card/80 dark:bg-card/40 backdrop-blur-md p-5 sm:p-6 md:p-10 border border-border shadow-2xl max-w-3xl rounded-sm">
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
                <p>
                  {" "}
                  Hello there! 👋 I&apos;m{" "}
                  <span className="text-primary font-bold">
                    Kevin Truong
                  </span>{" "}
                  (also known as{" "}
                  <span className="text-primary font-bold">
                    Truong Tan Dung
                  </span>
                  ), a Software Engineering graduate who loves turning complex
                  ideas into smooth, intuitive digital experiences.{" "}
                </p>{" "}
                <p>
                  {" "}
                  I thrive on the excitement of building things from the ground
                  up—whether that means designing scalable backends, crafting
                  responsive web interfaces, or developing mobile apps that
                  people genuinely enjoy using. For me, great software
                  isn&apos;t just about writing code; it&apos;s about creating
                  solutions that feel natural, reliable, and just right for the
                  user.{" "}
                </p>{" "}
                <p>
                  {" "}
                  My core expertise lies in{" "}
                  <span className="text-foreground font-semibold underline decoration-primary underline-offset-4">
                    {" "}
                    JavaScript, full-stack development, and mobile application
                    engineering{" "}
                  </span>
                  . I particularly enjoy working with modern technologies like
                  React, Next.js, and React Native to build fast, scalable
                  products. I also enjoy collaborating with small teams and
                  occasionally stepping into leadership roles to help turn ideas
                  into real, working products.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Outside of development, I&apos;m enjoys spending time playing
                  games 🎮, daydreaming about new ideas 💭, and sketching out
                  future side projects over a cup of Vietnamese white coffee
                  ☕.{" "}
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
              <figure>
                <Image
                  src="/kevin-truong-developer.webp"
                  alt="Kevin Truong portrait - Vietnamese full stack developer"
                  width={640}
                  height={960}
                  priority
                />
                <figcaption className="sr-only">
                  Kevin Truong (Truong Tan Dung), Vietnamese full-stack and
                  mobile developer
                </figcaption>
              </figure>
            </div>
          </div>
        </ScrollFade>
      </div>

      {/* MOBILE CONTENT CARD */}
      <div className="order-3 md:hidden px-4 sm:px-6 pb-8">
        <ScrollFade direction="left">
          <div className="relative z-10 bg-card/80 dark:bg-card/40 backdrop-blur-md p-5 sm:p-6 border border-border shadow-2xl rounded-sm">
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed font-medium">
              <p>
                {" "}
                Hello there! 👋 I&apos;m{" "}
                <span className="text-primary font-bold">
                  Kevin Truong
                </span>{" "}
                (also known as{" "}
                <span className="text-primary font-bold">Truong Tan Dung</span>
                ), a Software Engineering graduate who loves turning complex
                ideas into smooth, intuitive digital experiences.{" "}
              </p>{" "}
              <p>
                {" "}
                I thrive on the excitement of building things from the ground
                up—whether that means designing scalable backends, crafting
                responsive web interfaces, or developing mobile apps that people
                genuinely enjoy using. For me, great software isn&apos;t just
                about writing code; it&apos;s about creating solutions that feel
                natural, reliable, and just right for the user.{" "}
              </p>{" "}
              <p>
                {" "}
                My core expertise lies in{" "}
                <span className="text-foreground font-semibold underline decoration-primary underline-offset-4">
                  {" "}
                  JavaScript, full-stack development, and mobile application
                  engineering{" "}
                </span>
                . I particularly enjoy working with modern technologies like
                React, Next.js, and React Native to build fast, scalable
                products. I also enjoy collaborating with small teams and
                occasionally stepping into leadership roles to help turn ideas
                into real, working products.{" "}
              </p>{" "}
              <p>
                {" "}
                Outside of development, Kevin Truong (Truong Tan Dung) enjoys
                spending time playing games 🎮, daydreaming about new ideas 💭,
                and sketching out future side projects over a cup of Vietnamese
                white coffee ☕.{" "}
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>

      <p className="sr-only">
        Kevin Truong, also known as Truong Tan Dung, is a Vietnamese software
        developer specializing in full-stack and mobile development.
      </p>

      <div className="absolute bottom-0 right-8 hidden md:flex flex-col items-center">
        <span className="text-4xl font-black text-background mt-4 tracking-tighter">
          001
        </span>
        <GrowExpand
          direction="up"
          size="180px"
          className="w-3 grow-about shadow-2xl"
        />
      </div>
      <div className="absolute top-4 left-4 md:hidden">
        <span className="text-2xl sm:text-3xl font-black section-index-about">
          001
        </span>
      </div>

      {/* Subtle background text decoration */}
      <div className="absolute bottom-2 right-3 md:bottom-4 md:right-6 opacity-5 select-none pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-[15rem] font-black text-foreground uppercase tracking-tighter">
          Intro
        </span>
      </div>
    </div>
  );
}
