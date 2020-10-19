import React, { useState } from "react";
import infoPicture from "../../images/section-info.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import brand from "../../images/jarriolaLogoBig.png";
const Home = () => {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 1200);

  const effectName = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div>
      {visible ? (
        <div className="name-container big-name ">
          <motion.p
            variants={effectName}
            initial="visible"
            animate="hidden"
            transition={{ delay: 0.6 }}
          >
            <img src={brand} alt="Jaime Arriola Logo"></img>
            <p>Jaime Arriola</p>
          </motion.p>
        </div>
      ) : (
        <div className="home-container">
          <div className="header">
            <div className="header__text-box">
              <h1 className="header__primary-text">
                <span className="heading-primary--main">Jaime Arriola</span>

                <span className="heading-primary--sub">
                  Turning your ideas into your perfect website
                </span>
              </h1>
              <NavLink
                to="/work"
                className="btn btn--white btn--animated-from-bottom"
              >
                Check my work
              </NavLink>
            </div>
          </div>
          <section className="info-section">
            <div className="info-section--title">
              <p>Build your perfect web application will be my pleasure</p>
            </div>
            <div className="info-section--data">
              <div className="data--picture">
                <img src={infoPicture} className="" alt="infoPicture" />
              </div>
              <div className="data--text">
                <p>
                  If you want to improve a process on your bussiness by using a
                  customized web application or just want a website that make
                  your bussiness stand out, I'll be happy to help you to achieve
                  your goal
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
