import React from "react";
import * as projectsPictures from "../../images/projects/projectsPictures";
const SingleProject = (props) => {
  return (
    <article className="project-card">
      <div className="project-card__title">
        <h2>{props.projectName}</h2>
      </div>
      <div className="project-card__image-container">
        <img src={props.projectPicture} className="project-card__image" />
      </div>
      <div className="projects-card__techs">
        {props.projectTechs.map((tech, index) => (
          <span key={index} className={"projects-card--tech"}>
            {tech}
          </span>
        ))}
      </div>
      <div className="project-card__button-container">
        <a href="#" alt="none" className="btn--dark">
          READ MORE
        </a>
      </div>
    </article>
  );
};

export default SingleProject;
