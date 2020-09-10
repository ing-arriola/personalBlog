import React, { Fragment } from "react";
import NavItems from "../NavigationItems";
import Backdrop from "./Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = ["sideDrawer", "sideDrawer-close"];

  if (props.showB) {
    attachedClasses = ["sideDrawer", "sideDrawer-open"];
  }
  return (
    <Fragment>
      <Backdrop show={props.showB} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
