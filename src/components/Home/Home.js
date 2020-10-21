import React from "react";
import infoPicture from "../../images/section-info.jpg";
import infoPicture2 from "../../images/matter.jpg";

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
      {/*
 
 <section className="info-section">
   <div className="info-section--title">
     <p>It's not just a matter of building a website</p>
   </div>
   <div className="info-section--data">
     <div className="data--text">
       <p>
         I like to get things done but for me something is done just when
         it has high quality, and high quality means:
       </p>
       <ul>
         <li>Find important information fast</li>
         <li> Communicate your ideas on a easy way </li>
         <li> Communicate your ideas on a easy way </li>
       </ul>
     </div>
     <div className="data--picture--rigth">
       <img src={infoPicture2} className="" alt="infoPicture" />
     </div>
   </div>
 </section>
 
 */}
      .
    </div>
  );
};

export default Home;
