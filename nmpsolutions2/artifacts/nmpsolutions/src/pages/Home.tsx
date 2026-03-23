import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { CatchyPhrases } from "@/components/sections/CatchyPhrases";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <CatchyPhrases />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
