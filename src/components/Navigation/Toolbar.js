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
  console.log(props.show);

  return (
    <header className={navBackground === true ? "toolbar active " : "toolbar"}>
      <div className="toolbar__logo-or-Burger">
        <DrawerToogle clicked={props.show} className="logo-or-Burger" />
        <Link to="/">
          <Logo color={navBackground} />
        </Link>
      </div>

      <nav>
        <NavigationItems logoColor={navBackground} />
      </nav>
    </header>
  );
};

export default Toolbar;
