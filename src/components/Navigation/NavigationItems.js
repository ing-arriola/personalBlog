import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="navigation-items">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/about" exact>
        About
      </NavigationItem>
      <NavigationItem link="/work" exact>
        My Work
      </NavigationItem>
      <NavigationItem link="/contact" exact>
        Contact
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
