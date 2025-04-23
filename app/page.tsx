import Hero from "./components/Hero";
import Orb from "./components/Orb";
import Nod from "./components/Nod";
import OrbTabs from "./components/OrbTabs";
import LLM from "./components/llm";
import NodTabs from "./components/NodTabs";
import Suite from "./components/suite";
import DNA from "./components/dna";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <main className="max-w-[1920px] mx-auto px-6 py-4 grain-texture">
      <Hero />
      <Orb />
      <OrbTabs />
      <LLM />
      <Nod />
      <NodTabs />
      <Suite />
      <DNA /> 
      <FAQ />
    </main>
      <Footer />
    </>
  );
}
