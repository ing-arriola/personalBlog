import React from "react";
import NavigationItems from "./NavigationItems";
const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
