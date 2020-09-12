import React from "react";
import NavigationItems from "./NavigationItems";
import DrawerToogle from "./SideDrawer/DrawerToogle";
import Logo from "./Logo";
/*import Pdf from "../../docs/htmlUdemy.pdf";*/
const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <DrawerToogle clicked={props.show} />
      <Logo className="toolbar-logo" />
      <nav>
        <NavigationItems />
      </nav>
      {/* <a href={Pdf} target="_blank">
        CHECK MY RESUME
      </a>*/}
    </header>
  );
};

export default Toolbar;
