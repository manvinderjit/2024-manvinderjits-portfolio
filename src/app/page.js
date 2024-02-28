import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navbar/>
      <div class="container mx-auto mt-48 px-[7.5%] md:px-[2.5%]">
        <HeroSection />
        <ProjectsSection/>
        <SkillsSection/>
        <ContactSection/>
      </div>
    </main>
  );
}
