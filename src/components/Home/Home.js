import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="header__primary-text">
          <span className="heading-primary--main">Jaime Arriola</span>

          <motion.span className="heading-primary--sub">
            Turning your ideas into your perfect website
          </motion.span>
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
