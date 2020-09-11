import React from "react";
import jarriolaPhoto from "../../images/jaimeArriola.png";

const About = () => {
  return (
    <div id="about-container">
      <div id="about-photo">
        <img src={jarriolaPhoto} className="" alt="JarriolaPhoto" />
      </div>
      <div id="about-description">
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
    </div>
  );
};

export default About;
