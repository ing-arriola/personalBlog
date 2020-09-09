import React from "react";
import NavItems from "../NavigationItems";
import Backdrop from "./Backdrop";
const SideDrawer = (props) => {
  return (
    <div>
      <Backdrop show={props.showMenu} clicked={props.closed} />
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
