import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
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
            <span className="text-gradient">My Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my full resume or view my professional profile online
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => {
              window.open("https://docs.google.com/document/d/1AX8YQipVsqjfx-GTTIwwNrRKzRqvzcJ4JU6pbuEWpJA/edit?usp=sharing", "_blank");
            }}>
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold mb-2">JAIME ARRIOLA</h2>
              <p className="text-lg text-primary font-semibold mb-4">
                Fullstack Developer | React • Python • React Native • NextJS
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>San Salvador, El Salvador</span>
                <span>•</span>
                <span>+503 7237 1252</span>
                <span>•</span>
                <a href="mailto:arriola.dev@outlook.com" className="hover:text-primary">
                  arriola.dev@outlook.com
                </a>
              </div>
            </div>

            <div className="space-y-8">
              {/* Professional Summary */}
              <div>
                <h3 className="text-xl font-display font-bold mb-3 pb-2 border-b border-border">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground">
                  Experienced Fullstack Developer with 3+ years of expertise in building scalable web and mobile applications. 
                  Proficient in React, React Native, Python, Django, and modern development tools. Passionate about leveraging 
                  AI-powered tools to accelerate development and deliver high-quality solutions.
                </p>
              </div>

              {/* Key Skills */}
              <div>
                <h3 className="text-xl font-display font-bold mb-3 pb-2 border-b border-border">
                  Key Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "React / React Native",
                    "Python / Django",
                    "TypeScript",
                    "NextJS",
                    "Node.js",
                    "PostgreSQL / MongoDB",
                    "REST APIs / GraphQL",
                    "Git / GitHub",
                    "AI Development Tools",
                    "Agile / Scrum",
                    "Testing (Jest, Cypress)",
                    "Cloud Deployment",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-secondary rounded text-sm text-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">
                  For complete work experience, education, and project details, please download the full resume above.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
