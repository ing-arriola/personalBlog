import React from "react";

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
          href={props.projectLink}
          alt="cardProject"
          className="btn--dark"
          target="_blank"
        >
          GITHUB REPO
        </a>
        <a
          href={props.projectLink}
          alt="none"
          className="btn--dark"
          target="_blank"
        >
          LIVE DEMO
        </a>
      </div>
    </article>
  );
};

export default SingleProject;
