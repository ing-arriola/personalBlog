import React from "react";

const DrawerToogle = (props) => {
  return (
    <div className="drawerToogle" onClick={props.clicked}>
      <div className="lineBurger"></div>
      <div className="lineBurger"></div>
      <div className="lineBurger"></div>
    </div>
  );
};

export default DrawerToogle;
