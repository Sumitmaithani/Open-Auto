import React from "react";
import {PhoneFilled, MailFilled} from "@ant-design/icons";
import { FacebookFilled, TwitterCircleFilled, YoutubeFilled, LinkedinFilled, InstagramFilled  } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-one">
        <h1 className='footer-logo'>OPENAUTO</h1>
        <ul className="footer-options">
          <li className="footer-option">
            <PhoneFilled
              className="header-option-icon"
              style={{ transform: "rotateY(180deg)" }}
            />
            + 769 586 4558
          </li>
          <li className="footer-option">
            <MailFilled className="header-option-icon" />
            service@openauto.ca
          </li>
        </ul>
      </div>

      <div className="footer-two">
        <p className="footer-copyright">Open Auto © all rights reserved</p>
        <div className="footer-social-iconss">
          <ul className="footer-section">
            <li className="footer-section-element">Privacy-policy</li>
            <li className="footer-section-element">Terms of use</li>
            <li className="footer-section-element">Cookie policy</li>
          </ul>
        <ul className="footer-social-icons">
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

export default Footer;
