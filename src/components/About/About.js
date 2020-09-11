import React from "react";
import jarriolaPhoto from "../../images/jaimeArriola.png";
import * as logos from "../../images/about/index";
const About = () => {
  return (
    <div className="about-container">
      <div id="about-photo" className="about-container-column">
        <img src={jarriolaPhoto} className="" alt="JarriolaPhoto" />
      </div>
      <div id="about-description" className="about-container-column">
        <h2>Who am I?</h2>
        <p>
          I’m a FrontEnd Developer who enjoys creating intuitive, useful and
          organized web applications to help people do their job in an effective
          way.
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
      <div id="about-skills">
        <h2>My skills</h2>
        <img className="about-skill-logo" src={logos.jsLogo} alt="JavaScript" />
        <img className="about-skill-logo" src={logos.reactLogo} alt="React" />
        <img className="about-skill-logo" src={logos.nodeLogo} alt="NodeJS" />
        <img className="about-skill-logo" src={logos.html} alt="HTML" />
        <img className="about-skill-logo" src={logos.cssLogo} alt="HTML" />
        <img className="about-skill-logo" src={logos.sassLogo} alt="HTML" />
        <img className="about-skill-logo" src={logos.mongoLogo} alt="HTML" />
      </div>
    </div>
  );
};

export default About;
