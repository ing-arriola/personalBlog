import React, { useState } from "react";
import NavigationItems from "./NavigationItems";
import DrawerToogle from "./SideDrawer/DrawerToogle";
import Logo from "./Logo";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <Logo color={navBackground} />
      </Link>

      <nav>
        <NavigationItems logoColor={navBackground} />
      </nav>
    </header>
  );
};

export default Toolbar;
