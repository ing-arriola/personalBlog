import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return (
    <ul>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
