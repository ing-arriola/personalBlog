import React, { useState } from "react";
import Aux from "./Aux";
import Toolbar from "../components/Navigation/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
const Layout = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Aux>
      <Toolbar show={showMenuHandler} />
      <main>{props.children}</main>Ç
      <SideDrawer showB={showMenu} closed={showMenuHandler} />
    </Aux>
  );
};

export default Layout;
