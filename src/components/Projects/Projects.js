import React from "react";
import Project from "./SingleProject";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "Github Finder",
      description:
        "This is a Front-end App which uses the Github API in order to get public data from github profiles",
      techs: ["HTML", "CSS", "REACT JS", "AXIOS"],
    },
    {
      id: 2,
      name: "Bug Tracker",
      description:
        "This is a fullstack App made with MERN STACK and this allow to different users follow a flow of work ",
      techs: ["HTML", "CSS", "REACT JS"],
    },
    {
      id: 3,
      name: "Burger Builder",
      description:
        "This is a Front-end React App to build a hamburger, make an order and send a order with user's data to the backend (Firebase)",
      techs: ["HTML", "CSS", "REACT JS", "AXIOS", "FIREBASE"],
    },
    {
      id: 4,
      name: "ONG Website",
      description:
        "React Front End App with an Strapi API which was made for free in order to help to the ONG 'Jovenes para el futuro ' ",
      techs: ["HTML", "CSS", "REACT JS", "GATSBY", "GraphQL"],
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
        />
      ))}
    </div>
  );
};

export default Projects;
