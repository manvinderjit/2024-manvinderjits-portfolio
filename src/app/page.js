import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black min-w-80">
      <Navbar/>
      <div className="container mx-auto mt-36 px-[7.5%] md:px-[2.5%]">
        <HeroSection />
        <ExperienceSection />
        <PortfolioSection />        
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
