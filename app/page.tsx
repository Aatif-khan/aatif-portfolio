import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col bg-canvas text-txt-primary">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
    </div>
  );
}
