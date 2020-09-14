import React from "react";

const SingleProject = (props) => {
  return (
    <div className="project-card">
      <h2>{props.projectName}</h2>
      <p>{props.projectDescription}</p>
      <a href="#" alt="none" className="btn btn--dark">
        READ MORE
      </a>
    </div>
  );
};

export default SingleProject;
