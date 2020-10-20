import React from "react";
import infoPicture from "../../images/section-info.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="pages-main">
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
            <div className="data--text">
              <p>
                If you want to improve a process on your bussiness by using a
                customized web application or just want a website that make your
                bussiness stand out, I'll be happy to help you to achieve your
                goal
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
