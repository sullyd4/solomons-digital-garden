import { Mail, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Solomon Daini</h3>
            <div className="space-y-2 text-background/80">
              <p>Full-Stack Developer & Trainer</p>
              <p>Dublin, Ireland</p>
            </div>
          </div>
          
          {/* Center - Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <nav className="space-y-2">
              <a 
                href="#home" 
                className="block text-background/80 hover:text-background transition-smooth"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-background/80 hover:text-background transition-smooth"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="block text-background/80 hover:text-background transition-smooth"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-background/80 hover:text-background transition-smooth"
              >
                Contact
              </a>
            </nav>
          </div>
          
          {/* Right - Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:solomon@example.com" 
                className="flex items-center text-background/80 hover:text-background transition-smooth"
              >
                <Mail className="mr-2 h-4 w-4" />
                solomon@example.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://linkedin.com/in/solomon-daini" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-smooth"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/solomon-daini" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-smooth"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom - Copyright */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60">
            © {currentYear} Solomon Daini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;