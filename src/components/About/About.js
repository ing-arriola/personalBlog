import React from "react";
import jarriolaPhoto from "../../images/jaimeArriola.png";
import * as logos from "../../images/about/index";
const About = () => {
  return (
    <div className="about-container">
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
          <p>I’m looking for a remote job only which allows me:</p>
          <ul>
            <li>Get out from my confort zone</li>
            <li>Propose innovative ideas</li>
            <li>Learn new technologies... because I love keep learning!</li>
            <li>Growth Opportunities</li>
          </ul>
        </div>
      </div>
      <div id="about-container__skills-section">
        <div id="skills-section__title">
          <h2>My Dev skills</h2>
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
      </div>
    </div>
  );
};

export default About;
