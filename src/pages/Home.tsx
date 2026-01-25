import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Mail, Code2, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CodeHighlight from "@/components/CodeHighlight";

const Home = () => {
  const heroRef = useRef(null);
  const codeRef = useRef(null);
  const stackRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const codeInView = useInView(codeRef, { once: true, margin: "-100px" });
  const stackInView = useInView(stackRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-foreground">Open to full-time & contract roles · Remote-friendly</span>
            </div>

            {/* US Tech Teams Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm text-foreground">5+ Years Experience with US Tech Teams</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
              A product-minded engineer with 6+ years of experience building production-ready products with{" "}
              <span className="text-cyan-400">TypeScript</span>,{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">React Native</span>,{" "}
              <span className="text-cyan-400">Python</span>{" "}
              <span className="text-cyan-400">& AI</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-foreground/90 leading-relaxed">
              I help engineering teams ship faster by owning the full stack: from polished React interfaces to resilient Python backends, all the way to intelligent features powered by modern AI tooling.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/work">
                <Button className="cta-gradient-button text-white gap-2">
                  <Play className="w-4 h-4" />
                  Explore My Work
                </Button>
              </Link>
             
            </div>

            {/* CORE STACK Section */}
           
          </motion.div>

          {/* Right Column - Code Snippet & Quote */}
          <motion.div
            ref={codeRef}
            initial={{ opacity: 0, y: 20 }}
            animate={codeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Code Editor Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-foreground/60">rag-pipeline.ts</span>
              </div>

              {/* Code Snippet */}
              <CodeHighlight />

              {/* Quote */}
              <div className="px-6 pb-6 border-t border-border pt-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💬</div>
                  <p className="text-sm text-foreground/80 italic leading-relaxed">
                    "I love working with teams who care about developer experience, clean abstractions and measurable impact."
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="px-6 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-xs font-semibold text-primary">Jaime Arriola</span>
                  <span className="text-xs text-foreground/60">Shipping user-facing value since 2019</span>
                </div>
              </div>

            </div>
            <motion.div
              ref={stackRef}
              initial={{ opacity: 0, y: 20 }}
              animate={stackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8"
            >
              <h3 className="text-sm text-foreground/60 mb-4 uppercase tracking-wider">CORE STACK</h3>
              <div className="flex flex-wrap gap-3">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-lg cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-foreground/70" />
                  <span className="text-sm text-foreground">TypeScript · React · Next.js · React Native</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-lg cursor-pointer"
                >
                  <span className="text-sm text-foreground">🐍</span>
                  <span className="text-sm text-foreground">Python · NodeJS</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-lg cursor-pointer"
                >
                  <Brain className="w-4 h-4 text-foreground/70" />
                  <span className="text-sm text-foreground">AI · LLMs · CLI Tools</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
