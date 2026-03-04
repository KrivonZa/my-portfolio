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
  return (
    <div className="min-h-[200vh] bg-background">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
