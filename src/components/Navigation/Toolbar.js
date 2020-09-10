import React from "react";
import NavigationItems from "./NavigationItems";
import DrawerToogle from "./SideDrawer/DrawerToogle";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <DrawerToogle clicked={props.show} />

      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
