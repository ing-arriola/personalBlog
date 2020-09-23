import React from "react";
import myLogo from "../../images/jarriolaLogo.png";
const Logo = (props) => {
  return (
    <div className="logo">
      <img
        className={props.color ? "toolbar-logo--white" : "toolbar-logo"}
        src={myLogo}
        alt="Jarriola"
      />
    </div>
  );
};

export default Logo;
