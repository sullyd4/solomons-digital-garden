import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Search, Filter } from "lucide-react";

// Project assets
import projectCoaching from "@/assets/project-coaching.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
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

  const categories = ["All", "React", "E-commerce", "Full Stack", "Mobile"];

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

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of purposeful applications that solve real problems
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className={`cursor-pointer transition-colors ${
                      selectedCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-secondary/80"
                    }`}
                    onClick={() => setSelectedCategory(category)}
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
              <Card key={index} className="overflow-hidden hover-scale transition-transform duration-300 border-none bg-card/50">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
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