import React from "react";
import Project from "./SingleProject";
import * as projectsPictures from "../../images/projects/projectsPictures";
const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "Github Finder",
      description:
        "This is a Front-end App which uses the Github API in order to get public data from github profiles",
      picture: projectsPictures.gitFinder,
      techs: ["HTML", "CSS", "React", "AXIOS"],
    },
    {
      id: 2,
      name: "Bug Tracker",
      description:
        "This is a fullstack App made with MERN STACK and this allow to different users follow a flow of work ",
      picture: projectsPictures.burger,
      techs: ["HTML", "CSS", "Express", "Mongo DB", "React", "JWT"],
    },
    {
      id: 3,
      name: "Burger Builder",
      description:
        "This is a Front-end React App to build a hamburger, make an order and send a order with user's data to the backend (Firebase)",
      picture: projectsPictures.burger,
      techs: ["HTML", "CSS", "React", "AXIOS", "Firebase"],
    },
    {
      id: 4,
      name: "ONG Website",
      description:
        "React Front End App with an Strapi API which was made for free in order to help to the ONG 'Jovenes para el futuro ' ",
      picture: projectsPictures.redJovenes,
      techs: ["HTML", "CSS", "React", "Gatsby", "Contenful", "GraphQL"],
    },
  ];

  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <Project
          key={project.id}
          projectName={project.name}
          projectDescription={project.description}
          projectTechs={project.techs}
          projectPicture={project.picture}
        />
      ))}
    </div>
  );
};

export default Projects;
