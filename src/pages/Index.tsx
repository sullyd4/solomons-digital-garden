import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SoftSkills from "@/components/SoftSkills";
import TechnicalSkills from "@/components/TechnicalSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SoftSkills />
      <TechnicalSkills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;