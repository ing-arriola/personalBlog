import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Work = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: ["React", "Python", "Django", "Stripe"],
      category: "Fullstack",
      demo: "#",
      code: "#",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      tech: ["React Native", "TypeScript", "Firebase"],
      category: "Mobile",
      demo: "#",
      code: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using modern LLMs with custom prompts and templates",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tech: ["NextJS", "Python", "OpenAI", "Tailwind"],
      category: "AI",
      demo: "#",
      code: "#",
    },
    {
      title: "Real Estate Dashboard",
      description: "Property management system with analytics, tenant management, and financial reporting",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Charts"],
      category: "Fullstack",
      demo: "#",
      code: "#",
    },
    {
      title: "Social Media App",
      description: "Social networking platform with real-time chat, posts, stories, and user interactions",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tech: ["React Native", "Django", "WebSockets"],
      category: "Mobile",
      demo: "#",
      code: "#",
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management with Kanban boards, time tracking, and team features",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tech: ["React", "Python", "GraphQL", "Redux"],
      category: "Fullstack",
      demo: "#",
      code: "#",
    },
  ];

  const categories = ["All", "Fullstack", "Mobile", "AI"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-gradient">My Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Check out some of my best projects built with modern technologies
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-smooth group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-bold">{project.title}</h3>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
