// src/components/About.js
import React from "react";
import "./About.css";
import aboutPic from "../images/Mobile Marketing Bro.png"; // Update the path as needed
import project2 from "../images/p2.png";
import project1 from "../images/P1.png";
import project3 from "../images/P3.png";
import role1 from "../images/sir1.png";
import role2 from "../images/sir2.png";
import role3 from "../images/sir3.png";
import role4 from "../images/sir4.png";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="full-body">
      <section className="about-section">
        <div className="about-image">
          <img src={aboutPic} alt="Descriptive Alt Text" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At SidLabs, our philosophy is grounded in a resolute commitment to
            bridging the gap in harnessing technology for the evolution of
            humanity. We passionately believe that the judicious and
            personalized utilization of technology holds the key to unlocking
            unprecedented potential in our daily lives and businesses. In a
            world inundated with complexities, we champion the idea that optimal
            and tailored technology usage is not just advantageous but
            essential. It's about empowering individuals and organizations to
            transcend mundane challenges, propelling them towards greater
            efficiency, innovation, and success.
          </p>
        </div>
      </section>
      <section className="full-width-content">
        <p>
          In the relentless pursuit of reducing the gap between humans and
          technology,
        </p>
        <p className="colorpara">
          SidLabs endeavors to create solutions that are not just innovative but
          empathetic. We seek to demystify the complexities of technology,
          making it accessible to all, irrespective of their background or
          expertise.
        </p>
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

      <section class="team-section">
        <h2>Our Team</h2>
        <div class="team-cards">
          <div class="team-card">
            <img src={role1} alt="Team Member 1" class="team-image" />
            <div class="team-info">
              <h2>Sid Mitra</h2>
              <h5>Founder & Chief Solution Architect</h5>
            </div>
          </div>
          <div class="team-card">
            <img src={role2} alt="Team Member 2" class="team-image" />
            <div class="team-info">
              <h2>Anand Soni</h2>
              <h5>Co-Founder</h5>
            </div>
          </div>
          <div class="team-card">
            <img src={role3} alt="Team Member 3" class="team-image" />
            <div class="team-info">
              <h2>Dr. Manpreet Kaur</h2>
              <h5>Director of Performance Marketing</h5>
            </div>
          </div>
          <div class="team-card">
            <img src={role4} alt="Team Member 4" class="team-image" />
            <div class="team-info">
              <h2>Sweta Kumari Parmar</h2>
              <h5>User-Centric Design Specialist</h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
