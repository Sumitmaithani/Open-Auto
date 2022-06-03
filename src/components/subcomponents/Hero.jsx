import React from "react";
import HeroLeftside from "./HeroLeftside";
import HeroRightside from "./HeroRightside";
import logo from "../../images/logo.png";
import { FacebookFilled, TwitterCircleFilled, YoutubeFilled, LinkedinFilled, InstagramFilled  } from "@ant-design/icons";


const Hero = () => {
  return (
    <div className="hero">
      <HeroLeftside />
      <HeroRightside />
      <div className="hero-logo-bottom">
        <img className="hero-logo-img" src={logo} />
        <div className="social-icons">
        <ul className="hero-social-icons">
          <li><FacebookFilled className="hero-social-icon"/></li>
          <li><TwitterCircleFilled  className="hero-social-icon"/></li>
          <li><YoutubeFilled  className="hero-social-icon"/></li>
          <li><LinkedinFilled  className="hero-social-icon"/></li>
          <li><InstagramFilled  className="hero-social-icon"/></li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
