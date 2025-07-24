import { Button } from "@/components/ui/button";
import solomonPortrait from "@/assets/solomon-portrait.jpg";
import { Download, ExternalLink } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToProjects = (): void => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Solomon Daini
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground animate-fade-in stagger-1">
                Full-Stack Developer & Trainer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in stagger-2">
              I build purposeful applications and help people grow — physically, mentally, and digitally. 
              Focused on creating sustainable solutions that empower and support real human needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <Button size="lg" className="btn-primary px-8 py-6 text-lg font-medium">
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline px-8 py-6 text-lg font-medium"
                onClick={scrollToProjects}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Projects
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-medium hover-lift">
                <img 
                  src={solomonPortrait} 
                  alt="Solomon Daini - Full-Stack Developer" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 -z-10 scale-110 float"></div>
            </div>
          </div>
        </div>
        
        {/* Download Resume - Top Right */}
        <div className="absolute top-8 right-8 animate-fade-in stagger-4">
          <Button variant="outline" className="btn-outline">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;