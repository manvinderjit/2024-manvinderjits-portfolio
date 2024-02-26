import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navbar/>
      <div class="container mx-auto mt-48">
        <HeroSection />
      </div>
    </main>
  );
}
