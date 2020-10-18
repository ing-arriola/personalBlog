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
          <FaTwitter size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/jaime-arriola-1457bb1b2"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCTMHspxBI1kIxqIL0cVattA"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaYoutube size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
