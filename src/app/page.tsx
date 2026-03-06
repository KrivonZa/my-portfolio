"use client";

import { useRef } from "react";
import {
  Header,
  Intro,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={scrollRef}
      className="h-svh overflow-y-auto overflow-x-hidden scroll-smooth bg-background"
    >
      <Header scrollRef={scrollRef} />

      <section id="intro" className="h-svh">
        <Intro scrollRef={scrollRef}/>
      </section>

      <section id="about" className="min-h-svh">
        <About />
      </section>

      <section id="experience" className="h-svh">
        <Experience />
      </section>

      <section id="projects" className="min-h-svh">
        <Projects />
      </section>

      <section id="contact" className="min-h-svh md:h-svh">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
