import React from "react";
import jarriolaPhoto from "../../images/jaimeArriola.png";
import * as logos from "../../images/about/index";
import ae from "../../docs/aeroman.pdf";
import dg from "../../docs/dataguard.pdf";
import crn from "../../docs/ceren.pdf";

import {
  FaRegLightbulb,
  FaGraduationCap,
  FaChartLine,
  FaRegSmile,
} from "react-icons/fa";

import { motion } from "framer-motion";

const About = () => {
  const letters = [ae, dg, crn];

  const employers = [
    {
      name: "Aeroman",
      opinion:
        "Jaime Arriola  customized Aeroman LMS using HTML, CSS and adding customized functions with JavaScript, His experience & personal qualities will make him a powerful asset",
    },
    {
      name: "DataGuard",
      opinion:
        "Jaime worked for one of our most important customers showing responsibility, dedication and high commitment ",
    },
    {
      name: "Colegio Ceren ",
      opinion:
        "When Jaime  worked in our company on the development of  VBA Applications & teaching programming and electronics, also He showed  responsibility, Honesty and Respect. ",
    },
  ];
  //{Pdf}
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="about-container"
    >
      <div id="about-container__info-section">
        <div id="about-photo" className="info-section__column">
          <img src={jarriolaPhoto} className="" alt="JarriolaPhoto" />
        </div>
        <div id="about-description" className="info-section__column">
          <h2>Who am I?</h2>
          <p>
            I’m a FrontEnd Developer who enjoys creating intuitive, useful and
            organized web applications to help people do their job in an
            effective way.
          </p>
          <h2>What am I looking for?</h2>
          <p>I’m looking for a position job which allows me:</p>
          <ul>
            <li>
              {" "}
              <FaRegSmile /> Get out from my confort zone
            </li>
            <li>
              <FaRegLightbulb /> Propose innovative ideas{" "}
            </li>
            <li>
              <FaGraduationCap /> Learn new technologies, because I love keep
              learning!{" "}
            </li>
            <li>
              {" "}
              <FaChartLine /> Growth Opportunities
            </li>
          </ul>
        </div>
      </div>
      <section id="about-container__skills-section">
        <div id="section-title">
          <h2>My Tech stack</h2>
        </div>
        <div id="skills--section__logos">
          <img className="logos__logo" src={logos.jsLogo} alt="JavaScript" />
          <img className="logos__logo" src={logos.reactLogo} alt="React" />
          <img className="logos__logo" src={logos.nodeLogo} alt="NodeJS" />
          <img className="logos__logo" src={logos.html} alt="HTML" />
          <img className="logos__logo" src={logos.cssLogo} alt="CSS" />
          <img className="logos__logo" src={logos.sassLogo} alt="SASS" />
          <img className="logos__logo" src={logos.gatsbyLogo} alt="GATSBY" />
          <img className="logos__logo" src={logos.mongoLogo} alt="MONGODB" />
          <img className="logos__logo" src={logos.moodleLogo} alt="MOODLE" />
        </div>
      </section>

      <section className="letters-section">
        <div>
          <div className="card-title">
            <h2>Recommendations letters </h2>
          </div>
        </div>

        <div className="projects-container">
          {employers.map((employer, index) => (
            <div className="employer-card">
              <div className="card-title">
                <h2>{employer.name}</h2>
              </div>
              <div>
                <p>{employer.opinion}</p>
              </div>
              <div className="read-more ">
                <a
                  href={letters[index]}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Leer mas
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
