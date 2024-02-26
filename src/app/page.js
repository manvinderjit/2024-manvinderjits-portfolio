import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navbar/>
      <div class="container mx-auto mt-48">
        <HeroSection />
        <ProjectsSection/>
      </div>
    </main>
  );
}
