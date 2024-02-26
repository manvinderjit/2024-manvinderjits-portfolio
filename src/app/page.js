import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navbar/>
      <div class="container mx-auto mt-48">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
