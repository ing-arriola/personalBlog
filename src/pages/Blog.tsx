import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "Building Scalable APIs with Python and Django",
      excerpt: "Learn how to architect and build production-ready RESTful APIs using Django, with best practices for authentication, testing, and deployment.",
      date: "November 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&h=600&fit=crop",
      slug: "building-scalable-apis-django",
      tags: ["Python", "Django", "Backend"],
    },
    {
      title: "React Native: Building Cross-Platform Apps in 2024",
      excerpt: "A comprehensive guide to building modern mobile applications with React Native, covering navigation, state management, and native modules.",
      date: "October 28, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      slug: "react-native-guide-2024",
      tags: ["React Native", "Mobile", "TypeScript"],
    },
    {
      title: "Supercharging Development with AI Tools",
      excerpt: "Discover how AI-powered development tools like GitHub Copilot and ChatGPT can accelerate your workflow and improve code quality.",
      date: "October 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      slug: "ai-tools-development",
      tags: ["AI", "Productivity", "Tools"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, mobile apps, and AI
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-smooth group">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {articles[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${articles[0].slug}`}>
                  <Button className="gap-2 group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-smooth group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${article.slug}`}>
                  <Button variant="outline" size="sm" className="gap-2 group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
