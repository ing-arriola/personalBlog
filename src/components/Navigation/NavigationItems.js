import React from "react";
import NavigationItem from "./NavigationItem";
import homeLogo from "../../images/home-run.png";
import userLogo from "../../images/user.png";
import codeLogo from "../../images/coding.png";
import contactLogo from "../../images/email.png";

const NavigationItems = () => {
  return (
    <ul className="navigation-items">
      <NavigationItem link="/" exact>
        <img className="toolbar-logo" src={homeLogo} alt=""></img> Home
      </NavigationItem>
      <NavigationItem link="/about" exact>
        <img className="toolbar-logo" src={userLogo} alt=""></img> About
      </NavigationItem>
      <NavigationItem link="/work" exact>
        <img className="toolbar-logo" src={codeLogo} alt=""></img> My Work
      </NavigationItem>
      <NavigationItem link="/contact" exact>
        <img className="toolbar-logo" src={contactLogo} alt=""></img> Contact
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
