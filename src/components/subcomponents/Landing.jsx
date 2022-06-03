import React from "react";
import landing from "../../images/landing.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-img">
        <img className="landing-img-img" src={landing} />
      </div>

      <div className="landing-content">
        <h1 className="landing-content-heading">Focused on Time Saving</h1>
        <p className="landing-content-subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button className="landing-content-button">
          Download the mobile app
        </button>
      </div>

      <div className="landing-img2">
        <img className="landing-img-img" src={landing} />
      </div>
    </div>
  );
};

export default Landing;
