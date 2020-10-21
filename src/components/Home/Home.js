import React from "react";
import infoPicture from "../../images/section-info.jpg";

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
     <p>It's not just a matter of "have a website"</p>
   </div>
   <div className="info-section--data">
     <div className="data--text">
       <p>
         I like to get things done but for me something is done just when
         it has high quality, and high quality means:
       </p>
       <ul>
         <li>People can access your website from any device: computer, smartphone or tablets.</li>
         <li> I passed a lot of time paying attention to details, because your website must be perfect otherwise your customers can loose trust on you </li>
         <li> Your web aplication solves a real problem for you in a meaninful way </li>
       </ul>
       <p>
       So I'll spend as much time as necessary to get a high quality webiste for you
       </p>
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
