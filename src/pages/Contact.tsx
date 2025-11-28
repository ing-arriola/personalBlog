import { motion } from "framer-motion";
import { Clock, Shield, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "Alex from ACME",
    email: "alex@company.com",
    role: "Senior Full-Stack / AI Engineer for core product team",
    message: "Share team context, expectations, and timelines.",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ 
      name: "", 
      email: "", 
      role: "", 
      message: "" 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
              Ready to explore a fit?
            </h1>
            
            <p className="text-base text-foreground/80 leading-relaxed">
              I'm happy to walk through relevant projects, architecture decisions and trade-offs with your team. Share a role or brief, and I'll respond within one business day.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  Typical response time: under 24 hours.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  Comfortable with NDAs and private repos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm text-foreground/70 mb-2 block">
                  Your name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm text-foreground/70 mb-2 block">
                  Work email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="role" className="text-sm text-foreground/70 mb-2 block">
                  Role or brief
                </Label>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm text-foreground/70 mb-2 block">
                  What would you like to discuss?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background border-border text-foreground resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-background gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send message
                </Button>
                <p className="text-xs text-foreground/50">
                  Or reach out directly:{" "}
                  <a 
                    href="mailto:jaime.arriola@proton.me" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    jaime.arriola@proton.me
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
