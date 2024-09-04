// src/components/Home.js
import React from "react";
import "./Home.css";
import sidepic from "../images/side.png"; // Existing image
import missionImage from "../images/Mission.png"; // New image for Our Mission section
import { Link } from "react-scroll"; // Import Link from react-scroll
import ContactUs from "./Contact";
import SidLabs from "./SidLabs";
import LatestNews from "./LatestNews";
import Testinomial from "./Testinomial";
import project1 from "../images/P1.png";
import project2 from "../images/p2.png";
import project3 from "../images/P3.png";

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="image-container">
          <img
            src={sidepic}
            alt="Descriptive Alt Text"
            className="home-image"
          />
        </div>
        <div className="home-content">
          <h2>A VENTURE STUDIO</h2>
          <p>Advancing Human Intelligence Through Innovation</p>
          <Link
            to="our-mission"
            smooth={true}
            duration={500}
            className="explore-button"
          >
            Get Started
          </Link>
          <button className="explore-button" id="second">
            View More
          </button>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <h3>
            Elevating humanity through innovation and technology is our mission
          </h3>
          <p>
            Our vision is to reduce the gap in harnessing technology, towards
            human evolution! We believe that every technological solution should
            be purposeful and aligned with the unique needs of the user.
            One-size-fits-all approaches are outdated; instead, we advocate for
            solutions that are tailored, intuitive, and genuinely enhance the
            human experience.
          </p>
        </div>
        <div className="mission-image" id="our-mission">
          <img src={missionImage} alt="missionimage" className="mission-img" />
        </div>
      </section>

      <div className="flagship-section">
        <h2 className="flagship-heading">Flagship Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <a href="https://aiwisepartners.com/" className="project-card-link">
              <div className="card">
                <img src={project1} alt="project-image" />
                <div className="card__content">
                  <p className="card__title">
                    [AI]wise Partners: Revolutionizing Business Intelligence
                  </p>
                  <p className="card__description">
                    Dive into the future of business intelligence with [AI]wise
                    Partners. This cutting-edge solution harnesses the power of
                    artificial intelligence to provide unparalleled insights,
                    helping businesses make data-driven decisions with
                    confidence.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a
              href="https://www.awarewilderness.com/"
              className="project-card-link"
            >
              <div className="card">
                <img src={project2} alt="project-image" />
                <div className="card__content">
                  <p className="card__title">
                    AwareWilderness: CRAFTING MEMORIES
                  </p>
                  <p className="card__description">
                    Empowering travelers to embark on transformative journeys
                    that not only satisfy their wanderlust but also contribute
                    to the conservation and preservation of our planet's
                    precious wilderness.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a
              href="https://care.talktomissmp.com/"
              className="project-card-link"
            >
              <div className="card">
                <img src={project3} alt="project-image" />
                <div className="card__content">
                  <p className="card__title">CARE Platform</p>
                  <p className="card__description">
                    CARE utilizes a comprehensive framework to evaluate and
                    recommend child-friendly apps, videos, and games, ensuring
                    your child’s digital interactions are both enriching and
                    safe.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <SidLabs />
      <LatestNews />
      <Testinomial />
      <ContactUs />
    </>
  );
};

export default Home;
