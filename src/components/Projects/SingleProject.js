import React from "react";
import * as projectsPictures from "../../images/projects/projectsPictures";
const SingleProject = (props) => {
  return (
    <article className="project-card">
      <div>
        <h2>{props.projectName}</h2>
      </div>
      <div className="project-card__image-container">
        <img src={projectsPictures.gitFinder} className="project-card__image" />
      </div>
      <div>
        <p>{props.projectDescription}</p>
      </div>
      <div>
        <a href="#" alt="none" className="btn--dark">
          READ MORE
        </a>
      </div>
    </article>
  );
};

export default SingleProject;
