"use client";

import { ArrowUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollFade, GrowExpand } from "@/components/motions";

export default function Contact() {
  const goToIntro = () => {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-svh md:h-svh w-full grid grid-cols-1 md:grid-cols-3 items-center overflow-visible md:overflow-hidden font-nunito-sans bg-background py-8 md:py-0">
      {/* 1. BACKGROUND LAYER: Left (Theme Background) */}
      <div className="h-full col-span-1 md:col-span-2 hidden md:block bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-8 flex flex-col items-center">
          <span className="text-4xl font-black text-foreground/20 mt-4 tracking-tighter">
            013
          </span>
          <GrowExpand
            direction="up"
            size="249px"
            className="shadow-xl w-3 bg-foreground/20 dark:bg-primary/20"
          />
        </div>
      </div>

      {/* 2. BACKGROUND LAYER: Right (Themed Animated Gradient) */}
      <ScrollFade
        direction="right"
        className="min-h-[28svh] md:h-full col-span-1 animated-background 
          bg-linear-to-br from-blue-600 via-primary to-emerald-500 
          dark:from-blue-950 dark:via-blue-900 dark:to-emerald-900 
          opacity-80 md:opacity-100"
      />

      {/* 3. MAIN CONTENT CARD (The Overlapping Div) */}
      <ScrollFade
        direction="down"
        className="relative md:absolute md:inset-0 flex items-start md:items-center justify-center z-10 px-4 pt-6 pb-2 md:pt-0 md:pb-0"
      >
        <div
          className="relative py-8 px-4 sm:px-6 md:py-16 md:px-12 w-full max-w-6xl bg-card/90 dark:bg-card/70 backdrop-blur-md border border-border shadow-2xl flex flex-col justify-center rounded-lg md:rounded-xl overflow-hidden
        "
        >
          {/* Decorative Corner Line (Top Left) */}
          <div className="absolute top-0 left-0 flex items-end p-3 md:p-5">
            <GrowExpand
              direction="left"
              size="60px"
              className="h-1 bg-primary z-20"
            />
          </div>

          {/* Grid Layout inside the Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Info Side */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none">
                Contact <span className="text-primary italic">Me.</span>
              </h2>

              <div className="space-y-6 text-muted-foreground text-sm md:text-lg leading-relaxed">
                <p>
                  Shoot me a message and I will get back to you as soon as I
                  can. I&apos;m always open to discussing new projects or
                  creative opportunities.
                </p>

                <div className="flex flex-col space-y-2 pt-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Direct Lines
                  </span>
                  <a
                    href="mailto:kevintruong6587@gmail.com"
                    className="text-foreground font-semibold hover:text-primary transition-colors underline decoration-primary/20 underline-offset-8"
                  >
                    kevintruong6587@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <form
              className="space-y-4 w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-4 bg-secondary/30 dark:bg-background/50 border border-border focus:border-primary outline-hidden rounded-lg transition-all text-foreground placeholder:text-muted-foreground/40"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-4 bg-secondary/30 dark:bg-background/50 border border-border focus:border-primary outline-hidden rounded-lg transition-all text-foreground placeholder:text-muted-foreground/40"
                />
              </div>
              <textarea
                placeholder="Tell me what you think!"
                rows={5}
                className="w-full p-4 bg-secondary/30 dark:bg-background/50 border border-border focus:border-primary outline-hidden rounded-lg transition-all text-foreground placeholder:text-muted-foreground/40 resize-none"
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/40 hover:border-primary hover:bg-primary/10"
                  onClick={goToIntro}
                >
                  <ArrowUp className="size-4 animate-bounce" />
                  BACK TO INTRO
                </Button>

                <Button
                  variant="slideRight"
                  className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-7 text-base shadow-xl flex items-center gap-3"
                >
                  <Send size={18} />
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>

          {/* Decorative Corner Line (Bottom Right) */}
          <div className="absolute bottom-0 right-0 flex items-end p-3 md:p-5">
            <GrowExpand
              direction="right"
              size="60px"
              className="h-1 bg-primary z-20"
            />
          </div>
        </div>
      </ScrollFade>

      {/* Decorative Ghost Text behind the card */}
      <div className="absolute bottom-0 right-10 opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none hidden md:block">
        <span className="text-[15rem] font-black text-foreground uppercase tracking-tighter">
          Connect
        </span>
      </div>
    </div>
  );
}
