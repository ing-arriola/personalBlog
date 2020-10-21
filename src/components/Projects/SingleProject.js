import React from "react";
import { FaGithub, FaDesktop } from "react-icons/fa";

const SingleProject = (props) => {
  return (
    <article className="project-card">
      <div className="project-card__title">
        <h2>{props.projectName}</h2>
      </div>
      <div className="project-card__image-container">
        <img
          src={props.projectPicture}
          className="project-card__image"
          alt="ProjectPicture"
        />
      </div>
      <div className="projects-card__techs">
        {props.projectTechs.map((tech, index) => (
          <span key={index} className={"projects-card--tech"}>
            {tech}
          </span>
        ))}
      </div>
      <div className="project-card__button-container">
        <a
          href={props.projectRepository}
          alt="cardProject"
          className="btn--dark"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub /> CODE
        </a>
        <a
          href={props.projectLink}
          alt="none"
          className="btn--dark"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaDesktop /> DEMO
        </a>
      </div>
    </article>
  );
};

export default SingleProject;
