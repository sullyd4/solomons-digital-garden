import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Search, Filter } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Project assets
import projectCoaching from "@/assets/project-coaching.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";

interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const projects: Project[] = [
    {
      title: "Empower – Coaching Platform",
      description: "A comprehensive coaching platform that connects trainers with clients, featuring progress tracking, workout planning, and nutrition guidance.",
      stack: ["React", "Firebase", "Node.js"],
      image: projectCoaching,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "EcoShop – E-commerce Platform",
      description: "An e-commerce platform focused on sustainable products, with smart recommendations and carbon footprint tracking for conscious consumers.",
      stack: ["React", "Express", "MongoDB"],
      image: projectEcommerce,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "FlowTask – Project Management",
      description: "A minimalist project management tool designed for small teams, featuring kanban boards, time tracking, and collaborative workflows.",
      stack: ["React", "TypeScript", "Firebase"],
      image: projectTaskManager,
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories: string[] = ["All", "React", "E-commerce", "Full Stack", "Mobile"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || 
                           project.stack.includes(selectedCategory) ||
                           (selectedCategory === "E-commerce" && project.title.includes("E-commerce")) ||
                           (selectedCategory === "Full Stack" && project.stack.includes("Node.js")) ||
                           (selectedCategory === "Mobile" && project.stack.includes("React Native"));
    
    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  return (
    <section ref={ref} id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className={`w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6 transition-all duration-500 delay-200 ${
            isIntersecting ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of purposeful applications that solve real problems
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 space-y-6 transition-all duration-700 delay-300 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 hover-scale focus:scale-105 transition-transform"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className={`cursor-pointer transition-all duration-200 hover-scale ${
                      selectedCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-secondary/80"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover-lift border-none bg-card/50 backdrop-blur-sm transition-all duration-700 ${
                  isIntersecting 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs hover-scale">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" className="flex-1 btn-primary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 btn-outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;