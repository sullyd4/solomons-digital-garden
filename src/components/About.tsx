import aboutWorkspace from "@/assets/about-workspace.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} id="about" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`order-2 lg:order-1 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative hover-lift">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={aboutWorkspace} 
                  alt="Solomon's workspace - clean, organized development environment" 
                  className="w-full h-96 object-cover hover-scale"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10 float"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className={`order-1 lg:order-2 space-y-8 transition-all duration-700 delay-200 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <div className={`w-20 h-1 bg-gradient-primary rounded-full transition-all duration-500 delay-300 ${
                isIntersecting ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className={`transition-all duration-500 delay-400 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                As a full-stack developer with a background in personal training and holistic coaching, 
                I enjoy building tools that simplify, support, and empower people.
              </p>
              
              <p className={`transition-all duration-500 delay-500 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                I'm focused on sustainable solutions — whether for the body or the browser. 
                My approach combines technical expertise with genuine care for user experience, 
                creating applications that serve real human needs.
              </p>
              
              <p className={`transition-all duration-500 delay-600 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Based in Dublin, I work with businesses and individuals who value thoughtful, 
                purposeful technology that makes a meaningful difference in people's lives.
              </p>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className={`transition-all duration-500 delay-700 hover-lift ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div className={`transition-all duration-500 delay-800 hover-lift ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className={`transition-all duration-500 delay-900 hover-lift ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;