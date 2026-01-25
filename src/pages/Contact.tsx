import { motion, AnimatePresence } from "framer-motion";
import { Clock, Shield, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          role: "",
          message: "",
        });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
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
            className="relative"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-card border border-green-500/50 rounded-lg p-6 flex flex-col items-center justify-center z-10 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg font-semibold text-foreground mb-2"
                  >
                    Message sent!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-foreground/70 text-center"
                  >
                    I'll respond within 24 hours.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              name="contact"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-lg p-6 space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <Label htmlFor="name" className="text-sm text-foreground/70 mb-2 block">
                  Your name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting || isSuccess}
                  required
                  className="bg-background border-border text-foreground disabled:opacity-50"
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
                  disabled={isSubmitting || isSuccess}
                  required
                  className="bg-background border-border text-foreground disabled:opacity-50"
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
                  disabled={isSubmitting || isSuccess}
                  required
                  className="bg-background border-border text-foreground disabled:opacity-50"
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
                  disabled={isSubmitting || isSuccess}
                  required
                  rows={4}
                  className="bg-background border-border text-foreground resize-none disabled:opacity-50"
                />
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="bg-primary hover:bg-primary/90 text-background gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </Button>
                <p className="text-xs text-foreground/50">
                  Or reach out directly:{" "}
                  <a
                    href="mailto:arriola.dev@outlook.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    arriola.dev@outlook.com
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
