import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="header__primary-text">
          <span className="heading-primary--main">Jaime Arriola</span>
          <span className="heading-primary--sub">JavaScript Developer</span>
        </h1>
        <NavLink
          to="/work"
          className="btn btn--white btn--animated-from-bottom"
        >
          Check my work
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
