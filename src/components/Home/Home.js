import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [visible, setbolado] = useState(true);

  const effect1 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="header__primary-text">
          <span className="heading-primary--main">Jaime Arriola</span>
          {visible ? (
            <motion.span
              variants={effect1}
              initial="visible"
              animate="hidden"
              exit={{ x: 200 }}
              transition={{ duration: 1, yoyo: Infinity }}
              className="heading-primary--sub"
            >
              Always Learning, always growing
            </motion.span>
          ) : (
            <motion.span
              variants={effect1}
              initial="visible"
              animate="hidden"
              transition={{ duration: 1, yoyo: Infinity }}
              className="heading-primary--sub"
            >
              Building your ideas into your perfect App
            </motion.span>
          )}
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
