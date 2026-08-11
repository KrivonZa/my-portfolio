"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Mail, Github, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-8 font-nunito-sans print:bg-white print:p-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary),transparent_45%),radial-gradient(circle_at_bottom_left,var(--color-accent),transparent_40%)] opacity-20 print:hidden"
      />

      <div className="relative mx-auto mb-6 flex max-w-5xl flex-wrap gap-3 print:hidden">
        <Button
          asChild
          variant="outline"
          className="h-10 rounded-lg border-border bg-card/80 px-5 text-foreground backdrop-blur"
        >
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back
          </Link>
        </Button>

        <Button
          onClick={handlePrint}
          variant="slideRight"
          className="h-10 rounded-lg border border-primary/30 bg-card/80 px-5 font-semibold backdrop-blur"
        >
          <Printer className="size-4" />
          Print
        </Button>
      </div>

      <div className="relative mx-auto max-w-5xl rounded-2xl border border-border/70 bg-card/85 p-6 shadow-2xl backdrop-blur-sm md:p-10 print:max-w-full print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none">
        <header className="mb-8 border-b border-border pb-6">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-card-foreground md:text-5xl">
            Truong Tan Dung
          </h1>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground md:text-[15px]">
            <span className="flex items-center gap-1.5">
              <Mail className="size-4 text-primary" />
              truongtandung.work253@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-4 text-primary" />
              0944649917
            </span>
            <span className="flex items-center gap-1.5">
              <Github className="size-4 text-primary" />
              github.com/KrivonZa
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" />
              Ho Chi Minh City, Vietnam
            </span>
          </div>
        </header>

        <div className="space-y-8">
          <section className="space-y-3">
            <div className="mb-3 flex items-center gap-4">
              <div className="h-8 w-1.5 bg-primary" />
              <h2 className="text-xl font-black tracking-wide text-foreground">Technical Skills</h2>
            </div>
            <div className="grid gap-y-1 text-sm md:grid-cols-[140px_1fr] md:text-[15px]">
              <span className="font-bold text-foreground">Languages:</span>
              <span className="text-muted-foreground">JavaScript, TypeScript, Java, Kotlin</span>

              <span className="font-bold text-foreground">Frontend:</span>
              <span className="text-muted-foreground">ReactJS, NextJS, Astro, React Native</span>

              <span className="font-bold text-foreground">Backend:</span>
              <span className="text-muted-foreground">NodeJS, NestJS</span>

              <span className="font-bold text-foreground">Mobile:</span>
              <span className="text-muted-foreground">React Native, Android SDK</span>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-4 border-b border-border pb-1">
              <div className="h-8 w-1.5 bg-primary" />
              <h2 className="text-xl font-black tracking-wide text-foreground">Work Experience</h2>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-black text-card-foreground">AMAZING TECH</h3>
                <span className="text-sm font-medium text-muted-foreground">Sep 2024 - Dec 2024</span>
              </div>
              <div className="flex items-baseline justify-between italic text-muted-foreground">
                <span>Mobile Developer - Fulltime</span>
                <span className="text-sm">Ho Chi Minh City, VN</span>
              </div>
              <ul className="mt-2 list-outside list-disc space-y-1.5 pl-5 text-sm text-muted-foreground md:text-[15px]">
                <li>Led a team of 3 to architect and deliver a scalable React Native platform featuring high-performance RTMP livestreaming and fluid interactions.</li>
                <li>Optimized state management for real-time virtual gifting and implemented intelligent media caching for low-end devices.</li>
                <li>Successfully integrated a full-cycle monetization workflow with Stripe.</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-4 border-b border-border pb-1">
              <div className="h-8 w-1.5 bg-primary" />
              <h2 className="text-xl font-black tracking-wide text-foreground">Projects</h2>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-black text-card-foreground">B-ShowSell: Brand Collaboration System</h3>
                  <span className="text-sm font-medium text-muted-foreground">Sep 2025 - Jan 2026</span>
                </div>
                <div className="mb-2 text-sm font-semibold text-primary">Team Lead, Frontend Lead (Team size: 5)</div>
                <ul className="list-outside list-disc space-y-1.5 pl-5 text-sm text-muted-foreground md:text-[15px]">
                  <li>Built end-to-end features across React Native and React Vite, ensuring consistent UI logic.</li>
                  <li>Implemented local caching, smart data fetching, and media-loading optimizations for content-heavy screens.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-black text-card-foreground">Flipship: Smart Logistics</h3>
                  <span className="text-sm font-medium text-muted-foreground">Apr 2025 - Aug 2025</span>
                </div>
                <div className="mb-2 text-sm font-semibold text-primary">IT Team Lead, Fullstack Developer (Team size: 2)</div>
                <ul className="list-outside list-disc space-y-1.5 pl-5 text-sm text-muted-foreground md:text-[15px]">
                  <li>Integrated GoongMap API for route visualization and real-time order tracking.</li>
                  <li>Built reliable messaging system using WebSockets/Firebase and integrated PayOS for transactions.</li>
                  <li>Set up CI/CD pipelines with GitHub Actions for automated deployments.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-4 border-b border-border pb-1">
              <div className="h-8 w-1.5 bg-primary" />
              <h2 className="text-xl font-black tracking-wide text-foreground">Education</h2>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-black text-card-foreground">FPT University</h3>
                <p className="text-muted-foreground">Bachelor of Engineering, Software Engineering</p>
                <p className="text-sm text-muted-foreground">GPA: 3.0 / 4.0</p>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Dec 2022 - Jan 2026</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}