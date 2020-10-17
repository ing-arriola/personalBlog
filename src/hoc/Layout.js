import React, { useState } from "react";
import Aux from "./Aux";
import Toolbar from "../components/Navigation/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../components/Navigation/Footer";
const Layout = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Aux>
      <Toolbar show={showMenuHandler} />
      <main>{props.children}</main>
      <SideDrawer showB={showMenu} closed={showMenuHandler} />
      <Footer />
    </Aux>
  );
};

export default Layout;
