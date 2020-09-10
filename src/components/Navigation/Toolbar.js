import React from "react";
import NavigationItems from "./NavigationItems";
import DrawerToogle from "./SideDrawer/DrawerToogle";
import Logo from "./Logo";
const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <DrawerToogle clicked={props.show} />
      <Logo className="toolbar-logo" />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
