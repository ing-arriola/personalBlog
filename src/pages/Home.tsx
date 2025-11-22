import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                Fullstack Developer
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
              <span className="text-gradient glow-text">JAIME ARRIOLA</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Turning your ideas into powerful web applications with{" "}
              <span className="text-primary font-semibold">Python</span>,{" "}
              <span className="text-primary font-semibold">React</span>, and{" "}
              <span className="text-primary font-semibold">AI-powered tools</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/work">
                <Button size="lg" className="gap-2 group">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Tech Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth">
                <Code2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-display font-semibold mb-2">Fullstack Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  React, React Native, Python, Django, NextJS, and modern web technologies
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth">
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-display font-semibold mb-2">AI-Powered Development</h3>
                <p className="text-muted-foreground text-sm">
                  Leveraging AI tools to supercharge development and deliver faster results
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-display font-semibold mb-2">Years of Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Proven track record building scalable applications for startups and enterprises
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help bring your vision to life with modern web technologies
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2 group">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
