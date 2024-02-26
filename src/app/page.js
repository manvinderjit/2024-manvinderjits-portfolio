import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div class="container mx-auto p-24">
        <HeroSection />
      </div>
    </main>
  );
}
