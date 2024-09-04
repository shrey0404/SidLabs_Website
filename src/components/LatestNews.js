import React from "react";
import "./LatestNews.css";
import news1 from "../images/news1.png";
import news2 from "../images/news2.png";
import news3 from "../images/news3.png";

const LatestNews = () => {
  return (
    <div className="ai-insights-section">
      <div className="ai-insights-content">
        <h2 className="ai-insights-header">AI Insights</h2>
        <h3 className="ai-insights-subheader">
          Stay Updated with the Latest News and Developments
        </h3>
        <div className="ai-insights-cards">
          <div className="card">
            <img src={news1} alt="Industry Update" className="card-image" />
            <h4 className="card-title">Industry Update</h4>
            <p className="card-description">
              Significant progress in using AI for medical diagnostics,
              personalized medicine, drug discovery, and improving patient care.
            </p>
          </div>
          <div className="card">
            <img
              src={news2}
              alt="Online Tech Education"
              className="card-image"
            />
            <h4 className="card-title">Online Tech Education</h4>
            <p className="card-description">
              Online tech education has witnessed a surge in accessibility, with
              platforms offering specialized courses in emerging tech fields
              such as AI, cybersecurity, and data science.
            </p>
          </div>
          <div className="card">
            <img
              src={news3}
              alt="Modern Age Parenting"
              className="card-image"
            />
            <h4 className="card-title">Modern Age Parenting</h4>
            <p className="card-description">
              With the rise of technology, there's a surge in digital tools
              aiding parents—from apps monitoring child activities to
              educational platforms offering interactive learning experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
