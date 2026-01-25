import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                Selected work
              </h1>
              <p className="text-base text-foreground/70">
                A few projects that showcase end-to-end ownership and impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden bg-secondary/20">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-[80%] h-full object-cover mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-secondary text-xs text-foreground/70 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm rounded-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground text-sm rounded-md transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
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
