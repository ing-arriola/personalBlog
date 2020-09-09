import React from "react";

const DrawerToogle = (props) => {
  return (
    <div className="drawerToogle" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToogle;
