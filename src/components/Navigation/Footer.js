import React from "react";
import Logo from "./Logo";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="main-footer__personal-brand">
        <Logo color={true} />
        Jaime Arriola 2020
      </div>
      <div className="main-footer__social">
        <a
          href="https://github.com/ing-arriola"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://twitter.com/JaimeArriola8"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTwitter className="social-twitter" size={25} />
        </a>
        <a
          href="http://www.linkedin.com/in/jarriola-dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin className="social-linkedIn" size={25} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCTMHspxBI1kIxqIL0cVattA"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaYoutube className="social-youtube" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
