import React from "react";
import "./Testinomial.css";

const Testinomial = () => {
  return (
    <div className="testinomial-section">
      <div className="testinomial-content">
        <h2 className="testinomial-header">Testinomial</h2>
        <h3 className="testinomial-subheader">
          See What Our Clients Say’s About Us
        </h3>
        <p className="testinomial-description">
          Outstanding AI solutions that boost efficiency and accuracy.
          Exceptional service and innovative results!
        </p>
      </div>
      <div className="testinomial-cards">
        <div className="comment-card">
          <div className="comment-text">
            Partnering with SidLabs has been a game-changer for our business.
            Their innovative AI solutions and exceptional support have
            streamlined our operations, boosted efficiency, and driven
            remarkable growth. Highly recommend their expertise and cutting-edge
            technology!"
          </div>
          <div className="commenter-info">
            <div className="commenter-name">David</div>
            <div className="rating">
              <span className="star-icon">⭐</span>
              <span className="rating-number">4.5</span>
            </div>
          </div>
        </div>
        <div className="comment-card">
          <div className="comment-text">
            The AI solutions provided by SidLabs have revolutionized our
            workflow. Their technology is both powerful and user-friendly, and
            their team is incredibly responsive and knowledgeable. We're
            thrilled with the results and couldn't ask for a better partner in
            innovation.
          </div>
          <div className="commenter-info">
            <div className="commenter-name">Alex</div>
            <div className="rating">
              <span className="star-icon">⭐</span>
              <span className="rating-number">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
