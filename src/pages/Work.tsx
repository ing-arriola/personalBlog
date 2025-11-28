import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Work = () => {
  const projects = [
    {
      title: "AI Code Assistant",
      tech: "TS • React • Python • LLMs",
      description: "Embedded AI helper that ships pull-request-ready suggestions. Designed and built an in-IDE assistant that integrates with internal APIs, understands project context and auto-drafts PR descriptions, cutting review time by 30%.",
      tags: ["Observability", "LLM evaluation", "Developer tools"],
    },
    {
      title: "Hiring Analytics Dashboard",
      tech: "React • Node • Postgres",
      description: "Real-time view of funnel health for recruiting teams. Built a responsive dashboard with custom charts and granular permissions. Reduced weekly reporting time from hours to minutes and surfaced bottlenecks in the pipeline.",
      tags: ["Data modeling", "RBAC", "Design systems"],
    },
    {
      title: "Experimentation Platform",
      tech: "Python • Feature Flags • CI/CD",
      description: "Safely testing ideas in production without slowing teams down. Implemented a feature-flag and A/B testing layer, integrated with CI pipelines and analytics. Enabled fast rollouts, rollbacks and data-driven decisions.",
      tags: ["CI/CD", "Metrics", "Reliability"],
    },
  ];

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
            <Link
              to="/about"
              className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              Full experience overview
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6 max-w-4xl mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-3">
                  {project.tech}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-secondary text-xs text-foreground/70 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Snapshot Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Left Column - Experience Details */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Experience snapshot
            </h2>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Senior Full-Stack Engineer
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    Product companies & early-stage startups
                  </p>
                </div>
                <span className="text-sm text-foreground/60">8+ years</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Led builds from idea to production for cross-functional teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mentored engineers on modern frontend and backend patterns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Introduced AI features with measurable impact on key metrics.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Resume Download */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Need the full picture?
            </h3>
            <p className="text-sm text-foreground/60 mb-1">
              Ideal for sharing with hiring managers
            </p>
            <p className="text-sm text-foreground/70 mb-6">
              Get a concise, two-page overview with roles, tech stack, quantified impact and links to production work.
            </p>
            <div className="flex items-center gap-3">
              <Button className="bg-primary hover:bg-primary/90 text-background gap-2">
                <Download className="w-4 h-4" />
                Download resume
              </Button>
              <Link
                to="/contact"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                or request a tailored version
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
