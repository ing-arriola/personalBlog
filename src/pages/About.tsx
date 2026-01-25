import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Code, Rocket, Users } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "FullStack Developer",
      company: "Rumbix",
      period: "October 2025 - Present",
      location: "Remote - US Company",
      description: [
        "Built and maintained scalable RESTful APIs with Python and Django",
        "Developed UI components and integrated web applications with backend using Axios and Redux",
        "Created unit tests for all new features (both backend and frontend)",
        "Used AI CLI tools to accelerate development and improve code quality",
      ],
    },
    {
      title: "Frontend Developer (React/React Native)",
      company: "DESIGNLI",
      period: "January 2024 - July 2025",
      location: "Remote - US Company",
      description: [
        "Conducted client demos showcasing new features and gathering feedback",
        "Developed web applications using React 18, Vite, React Router, and modern design patterns",
        "Built mobile applications for iOS and Android using React Native and TypeScript",
        "Integrated third-party services including Google Maps, Stripe, Auth0, and Firebase",
        "Deployed mobile apps to TestFlight, App Store, and Google Play Store",
      ],
    },
    {
      title: "Software Developer (React/NextJS)",
      company: "Believe Solutions",
      period: "November 2022 - August 2023",
      location: "Remote",
      description: [
        "Fixed bugs and created new features using NextJS, React, and TypeScript",
        "Built and maintained RESTful APIs with Python, Django, and NodeJS",
        "Developed UI components using Tailwind CSS, Ant Design, Material UI, and SASS",
        "Participated in Agile/Scrum development processes",
        "Reviewed code and provided feedback to maintain high code quality",
      ],
    },
    {
      title: "Frontend Instructor",
      company: "DEV.F",
      period: "April 2022 - December 2022",
      location: "Part-time",
      description: [
        "Taught modern frontend development with React and JavaScript",
        "Mentored students in building real-world applications",
        "Created educational content and code examples",
      ],
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "React Native", "NextJS", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "Django", "Node.js", "REST APIs", "GraphQL"] },
    { category: "Mobile", items: ["React Native", "iOS", "Android", "Expo", "TestFlight"] },
    { category: "Tools & AI", items: ["Git", "JIRA", "AI CLI Tools", "Figma", "Storybook"] },
    { category: "Testing", items: ["Jest", "React Testing Library", "Cypress", "Unit Testing"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
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
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fullstack developer passionate about building intuitive, scalable applications using modern technologies and AI-powered tools
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Briefcase className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary">5+ Years</h3>
            <p className="text-muted-foreground">Professional Experience</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Code className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary">12+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary">Multiple</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            <Rocket className="inline-block w-8 h-8 mr-2 text-primary" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth"
              >
                <h3 className="text-lg font-display font-semibold mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            <Calendar className="inline-block w-8 h-8 mr-2 text-primary" />
            Experience Timeline
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold">{exp.title}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
