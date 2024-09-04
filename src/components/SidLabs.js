import React from "react";
import "./SidLabs.css";
import robot from "../images/robotpic.png";
const SidLabs = () => {
  return (
    <section className="sidlabs-section">
      <div className="sidlabs-content">
        <h2 className="sidlabs-header">SIDLABS</h2>
        <h3 className="sidlabs-subheader">Your Destination for Innovation</h3>
        <p className="sidlabs-description">
          SidLabs is not just a company; it's a destination for innovation.
        </p>
        <p className="sidlabs-description">
          Our suite of products represents three distinct stores in our
          innovation mall. Each store is a world in itself, driven by the
          relentless pursuit of excellence and global human upgradation.
        </p>
      </div>
      <div className="sidlabs-image">
        <img
          src={robot}
          alt="SidLabs Innovation"
          className="image-with-animation"
        />
      </div>
    </section>
  );
};

export default SidLabs;
