import HeroSection from "@/components/landing/HeroSection";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import BentoSection from "@/components/landing/BentoSection";
import SpecsSection from "@/components/landing/SpecsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSolutionSection />
      <BentoSection />
      <SpecsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
