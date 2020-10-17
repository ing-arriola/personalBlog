import React from "react";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="main-footer__personal-brand">Jaime Arriola 2020</div>
      <div className="main-footer__social">
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
