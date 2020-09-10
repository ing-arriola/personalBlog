import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="mainImage">
      <div className="text-box">
        <h1 className="primary-text">
          <span className="primary-text-main">Jaime Arriola</span>
          <span className="primary-text-sub">JavaScript Developer</span>
        </h1>
        <NavLink to="/work" className="btn btn-white btn-animated-from-bottom">
          Check my work
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
