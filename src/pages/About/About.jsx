import React from "react";
import "./About.scss";
import Card from "../../components/Card/Card";
import brainStationImage from "../../assets/images/BrainStation.webp";
import universityImage from "../../assets/images/UoG.webp";
import sandvineImage from "../../assets/images/Sandvine.webp";
import headshotImage from "../../assets/images/Headshot.webp";
import resumePDF from "../../assets/Resume.pdf";

const About = () => {
  return (
    <div className="about">
      <section className="about-me">
        <div className="header-area">
          <img src={headshotImage} alt="Lauren Hoeft" className="headshot" />
          <h1>About Me</h1>
        </div>
        <p>
          Hi, I'm Lauren, a passionate software developer with a strong
          background in computer science and a love for creating innovative
          solutions. My experience in quality assurance has given me a deep
          appreciation for creating simple, robust solutions to complex
          problems. I especially enjoy engineering these solutions in a
          collaborative setting and, with this strong foundation, I am excited
          to contribute to amazing projects!
        </p>
        <p>
          Rediscovering my passion for coding in QA, I am transitioning into
          software engineering. The creativity and problem-solving in software
          development excite me. I am eager to leverage my QA background to
          build better, more reliable software.
        </p>
        <a href={resumePDF} className="cta-button" download>
          Download Resume
        </a>
      </section>

      <section className="cards">
        <h2>Education</h2>
        <Card
          image={brainStationImage}
          title="BrainStation"
          subtitle="Diploma, Software Engineering"
        >
          <p>May 2024 - July 2024, Kitchener, ON</p>
        </Card>
        <Card
          image={universityImage}
          title="University of Guelph"
          subtitle="Bachelors of Computing, Minor Criminology & Public Policy"
        >
          <p>Jan 2015 - Apr 2021, Guelph, ON</p>
        </Card>
      </section>

      <section className="cards">
        <h2>Previous Work Experience</h2>
        <Card image={sandvineImage} title="Test Engineer" subtitle="Sandvine">
          <p>Aug 2021 - Jan 2024, Waterloo, ON</p>
          <p>
            Skillfully adapted in-house QA tools to work seamlessly with
            dockerized scalable services. Competently and knowledgeably deployed
            software testing methods in diverse cloud native environments.
            Reviewed and identified test coverage requirements while assessing
            customer feedback to detect faulty areas. Excelled as the designated
            QA team member and in delivering a first-to-market 5G Network Data
            Analytics Functions (NWDAF).
          </p>
        </Card>
      </section>
    </div>
  );
};

export default About;
