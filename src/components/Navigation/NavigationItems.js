import React, { Fragment } from "react";
import NavigationItem from "./NavigationItem";
import Pdf from "../../docs/htmlUdemy.pdf";
import { FaEnvelope, FaLaptopCode, FaUserAlt, FaHome } from "react-icons/fa";

const NavigationItems = (props) => {
  return (
    <ul className="navigation-items">
      <NavigationItem link="/" exact>
        <FaHome
          className={props.logoColor ? "toolbar-logo--white" : "toolbar-logo"}
        />{" "}
        Home
      </NavigationItem>
      <NavigationItem link="/about" exact>
        <FaUserAlt
          className={props.logoColor ? "toolbar-logo--white" : "toolbar-logo"}
        />{" "}
        About
      </NavigationItem>
      <NavigationItem link="/work" exact>
        <FaLaptopCode
          className={props.logoColor ? "toolbar-logo--white" : "toolbar-logo"}
        />{" "}
        My Work
      </NavigationItem>
      <NavigationItem link="/contact" exact>
        <FaEnvelope
          className={props.logoColor ? "toolbar-logo--white" : "toolbar-logo"}
        />{" "}
        Contact
      </NavigationItem>
      <a
        href={Pdf}
        rel="noreferrer noopener"
        target="_blank"
        className={props.logoColor ? " resume-btn " : "resume-btn "}
      >
        My Resume
      </a>
    </ul>
  );
};

export default NavigationItems;
