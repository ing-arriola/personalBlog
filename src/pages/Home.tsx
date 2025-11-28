import { motion } from "framer-motion";
import { Play, Mail, Code2, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-foreground">Open to full-time & contract roles · Remote-friendly</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
              Jaime Arriola a product-minded engineer who builds production-ready products with{" "}
              <span className="text-cyan-400">TypeScript</span>,{" "}
              <span className="text-cyan-400">React</span>,{" "}
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
                <Button className="bg-green-500 hover:bg-green-600 text-white gap-2">
                  <Play className="w-4 h-4" />
                  View selected work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="gap-2 border-border bg-secondary/50 hover:bg-secondary">
                  <Mail className="w-4 h-4" />
                  Book a 15-min intro
                </Button>
              </Link>
            </div>

            {/* CORE STACK Section */}
            <div className="pt-8">
              <h3 className="text-sm text-foreground/60 mb-4 uppercase tracking-wider">CORE STACK</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                  <Code2 className="w-4 h-4 text-foreground/70" />
                  <span className="text-sm text-foreground">TypeScript · React · Next.js</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                  <span className="text-sm text-foreground">🐍</span>
                  <span className="text-sm text-foreground">Python · FastAPI · Node</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                  <Brain className="w-4 h-4 text-foreground/70" />
                  <span className="text-sm text-foreground">AI · LLMs · MLOps</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Code Snippet & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                <span className="text-xs text-foreground/60">recruiter-brief.tsx</span>
              </div>

              {/* Code Snippet */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">fit</span>
                    <span className="text-foreground">: </span>
                    <span className="text-yellow-400">CandidateProfile</span>
                    <span className="text-foreground"> {"=>"} (</span>
                    <span className="text-foreground">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">strengths</span>
                    <span className="text-foreground">: [</span>
                    <span className="text-green-400">'product-minded'</span>
                    <span className="text-foreground">, </span>
                    <span className="text-green-400">'fast</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">  iterations'</span>
                    <span className="text-foreground">, </span>
                    <span className="text-green-400">'clear comms'</span>
                    <span className="text-foreground">] ,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">impact</span>
                    <span className="text-foreground">: [</span>
                    <span className="text-green-400">'greenfield builds'</span>
                    <span className="text-foreground">, </span>
                    <span className="text-green-400">'legacy</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">  refactors'</span>
                    <span className="text-foreground">, </span>
                    <span className="text-green-400">'AI features'</span>
                    <span className="text-foreground">]</span>
                  </div>
                  <div>
                    <span className="text-foreground">{"})"}</span>
                  </div>
                </div>
              </div>

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
                  <span className="text-xs font-semibold text-primary">TReacPy AI</span>
                  <span className="text-xs text-foreground/60">Shipping user-facing value since 2016</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
