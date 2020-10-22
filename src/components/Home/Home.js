import React from "react";
import infoPicture from "../../images/section-info.jpg";
import infoPicture2 from "../../images/section-info2.jpg";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="header__text-box">
          <h1 className="header__primary-text">
            <span className="heading-primary--main">Jaime Arriola</span>

            <span className="heading-primary--sub">
              Turning your ideas into your perfect website
            </span>
          </h1>
          <NavLink
            to="/work"
            className="btn btn--white btn--animated-from-bottom"
          >
            Check my work
          </NavLink>
        </div>
      </div>
      <section className="info-section">
        <div className="info-section--title">
          <p>Build your perfect web application will be my pleasure</p>
        </div>
        <div className="info-section--data">
          <div className="data--picture">
            <img src={infoPicture} className="" alt="infoPicture" />
          </div>
          <div className="data--text--right">
            <p>
              If you want to improve a process on your bussiness by using a
              customized web application or just want a website that make your
              bussiness stand out, I'll be happy to help you to achieve your
              goal
            </p>
          </div>
        </div>
      </section>
      <section className="info-section">
        <div className="info-section--title">
          <p>It's not just a matter of "have a website"</p>
        </div>
        <div className="info-section--data">
          <div className="data--text--left">
            <p>
              I my opinion something is only done when it has been done
              correctly, so I will deliver a website on which:
            </p>
            <ul>
              <li>
                Everyone will able to access your website from any device:
                computers, smartphones or tablets.
              </li>
              <li>
                {" "}
                I will spend a lot of time on all of the details in order to
                make your website perfect. The quality of your website will give
                your customers confidence in you.{" "}
              </li>
            </ul>
          </div>
          <div className="data--picture--rigth">
            <img src={infoPicture2} className="" alt="infoPicture" />
          </div>
        </div>
      </section>
      .
    </div>
  );
};

export default Home;
