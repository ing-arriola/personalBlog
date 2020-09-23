import React, { useState } from "react";
import NavigationItems from "./NavigationItems";
import DrawerToogle from "./SideDrawer/DrawerToogle";
import Logo from "./Logo";

/*import Pdf from "../../docs/htmlUdemy.pdf";*/

const Toolbar = (props) => {
  const [navBackground, setNavBackground] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 10) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <header className={navBackground === true ? "toolbar active " : "toolbar"}>
      <DrawerToogle clicked={props.show} />
      <Logo color={navBackground} />
      <nav>
        <NavigationItems logoColor={navBackground} />
      </nav>
      {/* <a href={Pdf} target="_blank">
        CHECK MY RESUME
      </a>*/}
    </header>
  );
};

export default Toolbar;
