import React, { useState } from "react";
import Project from "./SingleProject";
import { motion } from "framer-motion";
import * as projectsPictures from "../../images/projects/projectsPictures";
const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "Github Finder",
      description:
        "This is a Front-end App which uses the Github API in order to get public data from github profiles",
      picture: projectsPictures.gitFinder,
      techs: ["HTML", "CSS", "React", "AXIOS", "Hooks"],
      link: "https://githubfinderjarriola.netlify.app/",
      repository: "https://github.com/ing-arriola/githubFinder",
    },
    {
      id: 2,
      name: "Bug Tracker",
      description:
        "This is a fullstack App made with MERN STACK and this allow to different users follow a flow of work ",
      picture: projectsPictures.tracker,
      techs: ["Mongo", "Express", "React", "Node", "JWT"],
      link: "https://desolate-fortress-08367.herokuapp.com/login",
      repository: "https://github.com/ing-arriola/bugTrackerApp",
    },
    {
      id: 3,
      name: "Burger Builder",
      description:
        "This is a Front-end React App to build a hamburger, make an order and send a order with user's data to the backend (Firebase)",
      picture: projectsPictures.burger,
      techs: ["HTML", "CSS", "React", "AXIOS", "Firebase"],
      link: "https://jdevburgerbuilder.netlify.app/",
      repository: "https://github.com/ing-arriola/BurgerBuilderApp",
    },
    {
      id: 4,
      name: "ONG Website",
      description:
        "React Front End App with an Strapi API which was made for free in order to help to the ONG 'Jovenes para el futuro ' ",
      picture: projectsPictures.redJovenes,
      techs: ["React", "Gatsby", "Contenful", "GraphQL"],
      link: "",
      repository: "https://github.com/ing-arriola/gatsbyOng",
    },
  ];
  /*
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 1.3,
      },
    },
  };
*/

  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 1200);

  const effectName = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div>
      {showTitle ? (
        <div className="contact-container big-name ">
          <motion.p
            variants={effectName}
            initial="visible"
            animate="hidden"
            transition={{ delay: 1 }}
          >
            Jaime Arriola
          </motion.p>
        </div>
      ) : (
        <motion.div className="projects-container">
          {projectsData.map((project) => (
            <Project
              key={project.id}
              projectName={project.name}
              projectDescription={project.description}
              projectTechs={project.techs}
              projectPicture={project.picture}
              projectLink={project.link}
              projectRepository={project.repository}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
