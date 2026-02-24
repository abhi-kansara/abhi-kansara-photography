import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SelectedWorks } from "../components/SelectedWorks";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-slate-900 font-display antialiased">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow pt-28 md:pt-32">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
            <HeroSection />
            <SelectedWorks />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}