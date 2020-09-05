import React from "react";
import Aux from "./Aux";
import Toolbar from "../components/Navigation/Toolbar";
const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
