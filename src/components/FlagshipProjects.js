import React from "react";
import "./FlagshipProjects.css"; // Assuming the CSS file is named FlagshipProjects.css
import Footer from "./Footer";
import project2 from "../images/p2.png";
import project1 from "../images/P1.png";
import project3 from "../images/P3.png";

const FlagshipProjects = () => {
  return (
    <>
      <section className="flagship-projects-section">
        <div className="flagship-heading">
          <h2>Explore</h2>
          <p>OUR FLAGSHIP PROJECTS</p>
        </div>
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
      </section>
      <Footer />
    </>
  );
};

export default FlagshipProjects;
