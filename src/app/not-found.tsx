"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GrowExpand, ScrollFade, SlideTitle } from "@/components/motions";

export default function NotFound() {
  return (
    <main className="relative min-h-svh w-full flex items-center justify-center overflow-hidden font-nunito-sans bg-background px-6 py-16">
      {/* Radial gradient decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary),transparent_45%),radial-gradient(circle_at_bottom_left,var(--color-accent),transparent_40%)] opacity-15"
      />

      {/* Top-left accent */}
      <div className="absolute top-0 left-8 hidden md:flex flex-col items-center">
        <GrowExpand direction="down" size="120px" className="w-3 grow-intro shadow-2xl" />
      </div>

      {/* Bottom-right accent */}
      <div className="absolute bottom-0 right-8 hidden md:flex flex-col items-center">
        <GrowExpand direction="up" size="120px" className="w-3 grow-projects shadow-2xl" />
      </div>

      {/* Background text decoration */}
      <div className="absolute bottom-2 left-4 opacity-[0.04] select-none pointer-events-none hidden xl:block">
        <span className="text-[15rem] font-black text-foreground uppercase tracking-tighter">
          Lost
        </span>
      </div>

      {/* Content Card */}
      <ScrollFade direction="down" className="relative z-10 w-full max-w-2xl">
        <div className="relative py-10 px-8 md:py-16 md:px-14 bg-card/90 dark:bg-card/80 md:backdrop-blur-md border border-border shadow-2xl rounded-2xl overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 p-4">
            <GrowExpand direction="left" size="60px" className="h-1 grow-intro" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <GrowExpand direction="right" size="60px" className="h-1 grow-projects" />
          </div>

          <div className="space-y-6">
            {/* Mono label */}
            <p className="font-roboto-mono text-primary text-xs md:text-sm font-bold tracking-widest uppercase">
              Error — Page not found
            </p>

            {/* 404 hero */}
            <SlideTitle
              direction="left"
              baseColor="bg-primary"
              className="text-8xl md:text-[10rem] font-black tracking-tight leading-none"
            >
              <span className="text-background dark:text-background font-roboto-mono">
                404
              </span>
            </SlideTitle>

            <div className="h-px w-full bg-border" />

            {/* Message */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-tighter">
                Oops, nothing&nbsp;here.
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or may have
                been moved.
              </p>
            </div>

            {/* Code-style annotation */}
            <div className="font-roboto-mono text-xs md:text-sm bg-muted/60 border border-border rounded-md px-4 py-3 text-muted-foreground">
              <span className="text-primary">const</span> page ={" "}
              <span className="text-destructive">undefined</span>
              <span className="opacity-50">{" // route not matched"}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="slideTop" className="px-8 py-5 font-bold text-base">
                <Link href="/">
                  <Home size={16} />
                  Go Home
                </Link>
              </Button>
              <Button
                variant="outline"
                className="px-8 py-5 font-bold text-base"
                onClick={() => window.history.back()}
              >
                <ArrowLeft size={16} />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </ScrollFade>
    </main>
  );
}
