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
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 min-w-0"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full w-full sm:w-auto">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground break-words">Open to full-time & contract roles · Remote-friendly</span>
            </div>

            {/* US Tech Teams Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/30 rounded-full w-full sm:w-auto">
              <span className="text-xs sm:text-sm text-foreground break-words">5+ Years Experience with US Tech Teams</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
              A product-minded engineer with 6+ years of experience building production-ready products with{" "}
              <span className="text-cyan-400">TypeScript</span>,{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">React Native</span>,{" "}
              <span className="text-cyan-400">Python</span>{" "}
              <span className="text-cyan-400">& AI</span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
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
            className="relative min-w-0"
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Code Editor Window Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] sm:text-xs text-foreground/60">rag-pipeline.ts</span>
              </div>

              {/* Code Snippet */}
              <CodeHighlight />

              {/* Quote */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-border pt-4 sm:pt-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl">💬</div>
                  <p className="text-xs sm:text-sm text-foreground/80 italic leading-relaxed">
                    "I love working with teams who care about developer experience, clean abstractions and measurable impact."
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-[10px] sm:text-xs font-semibold text-primary">Jaime Arriola</span>
                  <span className="text-[10px] sm:text-xs text-foreground/60">Shipping user-facing value since 2019</span>
                </div>
              </div>

            </div>
            <motion.div
              ref={stackRef}
              initial={{ opacity: 0, y: 20 }}
              animate={stackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 sm:pt-8"
            >
              <h3 className="text-xs sm:text-sm text-foreground/60 mb-3 sm:mb-4 uppercase tracking-wider">CORE STACK</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-lg cursor-pointer"
                >
                  <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/70" />
                  <span className="text-xs sm:text-sm text-foreground">TypeScript · React · Next.js · React Native</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-lg cursor-pointer"
                >
                  <span className="text-xs sm:text-sm text-foreground">🐍</span>
                  <span className="text-xs sm:text-sm text-foreground">Python · NodeJS</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-lg cursor-pointer"
                >
                  <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/70" />
                  <span className="text-xs sm:text-sm text-foreground">AI · LLMs · CLI Tools</span>
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
