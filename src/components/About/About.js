import React from "react";
import jarriolaPhoto from "../../images/jaimeArriola.png";
import * as logos from "../../images/about/index";
import ae from "../../docs/aeroman.pdf";
import dg from "../../docs/dataguard.pdf";
import ravn from "../../docs/Ravn.pdf";

import {
  FaRegLightbulb,
  FaGraduationCap,
  FaChartLine,
  FaRegSmile,
} from "react-icons/fa";

import { motion } from "framer-motion";

const About = () => {
  const letters = [ae, dg, ravn];

  const employers = [
    {
      name: "DataGuard",
      opinion:
        "Jaime worked for one of our most important customers showing responsibility, dedication and high commitment ",
    },
    {
      name: "Aeroman",
      opinion:
        "Jaime Arriola  customized Aeroman LMS using HTML, CSS and adding customized functions with JavaScript, His experience & personal qualities will make him a powerful asset",
    },
    {
      name:'RAVN',
      opinion:'Having know Jaime as his manager and boss I am certain that he will thrive as a software developer in the future due to his persistence and willingness to learn new technologies, design patterns and methodologies'
    }
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
          <img className="logos__logo" src={logos.typescript} alt="Typescript" />
          <img className="logos__logo" src={logos.reactLogo} alt="React" />
          <img className="logos__logo" src={logos.reactNativeLogo} alt="ReactNative" />
          <img className="logos__logo" src={logos.jsLogo} alt="JavaScript" />
          <img className="logos__logo" src={logos.html} alt="HTML" />
          <img className="logos__logo" src={logos.cssLogo} alt="CSS" />
          <img className="logos__logo" src={logos.styledLogo} alt="STYLED" />
          <img className="logos__logo" src={logos.sassLogo} alt="SASS" />
          <img className="logos__logo" src={logos.apolloLogo} alt="APOLLO" />
          <img className="logos__logo" src={logos.graphqlLogo} alt="GraphQL" />
          <img className="logos__logo" src={logos.cypressLogo} alt="CYPRESS" />
          <img className="logos__logo" src={logos.storybookLogo} alt="Storybook" />
          <img className="logos__logo" src={logos.gatsbyLogo} alt="GATSBY" />
          <img className="logos__logo" src={logos.nodeLogo} alt="NodeJS" />
          <img className="logos__logo" src={logos.jestLogo} alt="JEST" />
        </div>
      </section>

      <section className="letters-section">
        <div>
          <div className="card-title">
            <h2>Recommendations letters </h2>
          </div>
        </div>

        <div className="recomendations-container">
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
