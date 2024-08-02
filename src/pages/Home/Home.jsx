import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import headshotImage from "../../assets/images/Headshot.webp";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <img src={headshotImage} alt="Lauren Hoeft" className="home__hero__headshot" />
        <h1 className="home__hero__title">Welcome to My Portfolio</h1>
        <p className="home__hero__description">
          Hi, I'm Lauren. I'm a passionate software developer with a love for creating innovative solutions.
        </p>
        <div className="home__hero__cta-buttons">
          <Link to="/about" className="home__hero__cta-button">
            About Me
          </Link>
          <Link to="/projects" className="home__hero__cta-button">
            Projects
          </Link>
          <Link to="/contact" className="home__hero__cta-button">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
