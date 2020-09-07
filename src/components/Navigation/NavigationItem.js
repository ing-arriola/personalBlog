import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li>
      <NavLink to={props.link} exact={props.exact} className="navigation-item">
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
