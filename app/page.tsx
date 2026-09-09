import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col bg-canvas text-txt-primary">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
      </main>
    </div>
  );
}
