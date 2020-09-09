import React from "react";
import NavigationItems from "./NavigationItems";
import DrawerToogle from "./SideDrawer/DrawerToogle";
import SideDrawer from "./SideDrawer/SideDrawer";
const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <DrawerToogle clicked={props.showSideDrawer} />
      <div className="spacer" />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
