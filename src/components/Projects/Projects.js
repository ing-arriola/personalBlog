import React from "react";
import Project from "./SingleProject";
import { motion } from "framer-motion";
import * as projectsPictures from "../../images/projects/projectsPictures";
import { FaLaptop } from "react-icons/fa";

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
      link: "https://rdjfuturo.netlify.app/",
      repository: "https://github.com/ing-arriola/gatsbyOng",
    },
    {
      id: 5,
      name: "Natours",
      description: " Project Description ",
      picture: projectsPictures.natours,
      techs: ["HTML", "CSS", "SASS"],
      link: "https://ing-arriola.github.io/ToursWebPage/",
      repository: "https://github.com/ing-arriola/ToursWebPage",
    },
    {
      id: 6,
      name: "Social Page",
      description: " Project Description ",
      picture: projectsPictures.landing,
      techs: ["React", "React-Bootstrap"],
      link: "https://landing-social.netlify.app/",
      repository: "https://github.com/ing-arriola/looplab",
    },
    {
      id: 7,
      name: "Restaurant JS",
      description: " Project Description ",
      picture: projectsPictures.restaurant,
      techs: ["React", "React-Bootstrap"],
      link: "https://reactjs-restaurant.netlify.app/",
      repository: "https://github.com/ing-arriola/company-site",
    },
  ];

  return (
    <motion.div>
      <div className="projects-title">
        <h1>
          Check my best projects <FaLaptop />
        </h1>
      </div>

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
    </motion.div>
  );
};

export default Projects;
