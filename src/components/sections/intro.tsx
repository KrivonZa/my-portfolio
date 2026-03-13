"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { ScrollFade, GrowExpand } from "@/components/motions";
import { RefObject } from "react";

interface IntroProps {
  scrollRef: RefObject<HTMLElement | null>;
}

export default function Intro({ scrollRef }: IntroProps) {
  const goToContact = () => {
    const element = document.getElementById("contact");

    if (element && scrollRef?.current) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-svh w-full grid grid-cols-1 md:grid-cols-3 items-center overflow-hidden font-nunito-sans bg-background">
      <h1 className="sr-only">
        Kevin Truong (Truong Tan Dung) — Full-Stack & Mobile Developer
      </h1>

      {/* LEFT BACKGROUND (Theme Background) */}
      <div className="h-full col-span-1 md:col-span-2 hidden md:block bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-8 flex flex-col items-center">
          <span className="text-4xl font-black text-background mt-4 tracking-tighter">
            000
          </span>
          <GrowExpand
            direction="up"
            size="249px"
            className="shadow-xl w-3 grow-intro"
          />
        </div>
      </div>

      {/* RIGHT BACKGROUND (Gradient Background) */}
      <ScrollFade
        direction="right"
        className="hidden md:block h-full col-span-1 animated-background 
          bg-linear-to-br from-blue-600 via-primary to-emerald-500 
          dark:from-blue-950 dark:via-blue-900 dark:to-emerald-900 
          opacity-80 md:opacity-100"
      />

      {/* CONTENT CARD */}
      <ScrollFade
        direction="down"
        className="absolute inset-0 flex items-center justify-center z-10 px-4"
      >
        <div className="relative py-8 px-4 md:py-12 md:px-8 w-full md:max-w-5xl bg-card/90 dark:bg-card/70 backdrop-blur-md border border-border shadow-2xl flex flex-col justify-center rounded-xl overflow-hidden">
          <div className="absolute top-0 left-0 flex items-end p-3 md:p-5">
            <GrowExpand
              direction="left"
              size="60px"
              className="h-1 grow-intro z-20"
            />
          </div>

          {/* Typewriter Animation */}
          <div className="min-h-16 md:min-h-24 flex items-center overflow-hidden">
            <TypeAnimation
              sequence={[
                'console.log("Hello!👋");',
                1000,
                "",
                500,
                'System.out.println("you\'ve arrived");',
                1000,
                "",
                500,
                'printf("within my");',
                1000,
                "",
                500,
                "<p>creative space</p>",
                1000,
                "",
                500,
                'print("where every")',
                1000,
                "",
                500,
                'echo "pixel tells"',
                1000,
                "",
                500,
                'mov eax, "a story"',
                1000,
                "",
                500,
                'fmt.Println("waiting for")',
                1000,
                "",
                500,
                'SELECT "your discovery! :D";',
                1000,
                "",
                500,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-roboto-mono font-bold text-primary whitespace-pre-line"
            />
          </div>

          <p className="py-4 md:py-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-muted-foreground max-w-2xl leading-relaxed">
            From the first line of code to final deployment, I build web
            experiences that just work:&#41;. Take a look around!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              asChild
              variant="slideRight"
              className="w-full sm:w-auto px-10 py-6 text-base shadow-lg"
            >
              <Link href="/resume">View Resume</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-10 py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={goToContact}
            >
              Let&apos;s talk!
            </Button>
          </div>

          <div className="absolute bottom-0 right-0 flex items-end p-3 md:p-5">
            <GrowExpand
              direction="right"
              size="60px"
              className="h-1 grow-intro z-20"
            />
          </div>
        </div>
      </ScrollFade>
    </div>
  );
}
